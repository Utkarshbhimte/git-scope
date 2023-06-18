#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import simpleGit from 'simple-git';
import chalk from 'chalk';
import Table from 'cli-table3';
import getFolderSize from 'get-folder-size';
import filesize from 'filesize';

const targetDir = process.cwd();  // Use current working directory

// Initialize the table
let table = new Table({
    head: ['Folder Name', 'Status', 'Current Branch', 'Last Commit', 'Node Modules Size'],
    colWidths: [20, 20, 20, 30, 20]
});

fs.readdir(targetDir, async (err, files) => {
    if (err) {
        console.error(`Error reading directory: ${err}`);
        process.exit(1);
    }

    for (let file of files) {
        const filePath = path.join(targetDir, file);

        // Check if it's a directory
        if (fs.lstatSync(filePath).isDirectory()) {
            // Initialize git
            const gitP = simpleGit(filePath);
            const isRepo = await gitP.checkIsRepo();

            if (!isRepo) {
                // Log directory without any color as git is not initialized
                table.push([file, 'Not a git repo', '-', '-', '-']);
                continue;
            }

            // Fetch git status
            const status = await gitP.status();
            const log = await gitP.log();
            const lastCommit = log.latest ? log.latest.message : "No commits yet";

            // Check if there are any unstaged changes
            const statusText = status.isClean() ? chalk.green('All changes staged') : chalk.red('Unstaged changes');

            // Calculate size of node_modules folder
            const nodeModulesPath = path.join(filePath, 'node_modules');
            let nodeModulesSize = '-';
            if (fs.existsSync(nodeModulesPath)) {
                try {
                    const size = await new Promise((resolve, reject) => {
                        getFolderSize(nodeModulesPath, (err, size) => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve(size);
                            }
                        });
                    });
                    nodeModulesSize = filesize(size);
                } catch (err) {
                    console.error(`Error calculating size of node_modules: ${err}`);
                    nodeModulesSize = 'Error';
                }
            }

            table.push([file, statusText, status.current, lastCommit, nodeModulesSize]);
        }
    }

    console.log(table.toString());
});
