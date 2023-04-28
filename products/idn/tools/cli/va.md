---
id: cli-va
title: VA 
pagination_label: CLI VA
sidebar_label: VA
sidebar_position: 7
sidebar_class_name: cli-va
keywords: ['cli', 'va']
description: Learn about the CLI commands you can use to interact with VAs in this guide. 
slug: /tools/cli/va
tags: ['CLI']
---
# VA

Learn about the CLI commands you can use to interact with VAs in this guide. 

A virtual appliance (VA) is a Linux-based virtual machine that connects to your sources and applications in IDN by using APIs, connectors, and other integrations SailPoint has made available. 

For more information about VAs, refer to the [Virtual Appliance Reference Guide](https://community.sailpoint.com/t5/IdentityNow-Connectors/Virtual-Appliance-Reference-Guide/ta-p/74641?_ga=2.265747530.43742715.1681135659-1245631791.1680185785&_gl=1*1bevvkq*_ga*MTI0NTYzMTc5MS4xNjgwMTg1Nzg1*_ga_SS72Z4HXJM*MTY4MTMwOTc1MC4yOS4xLjE2ODEzMDk5MzkuMjguMC4w). 

## Commands

To use the CLI to interact with VAs connected to your tenant, run these commands: 
- [Collect](#collect)
    - [Flags](#flags)
    - [Example](#example)
- [Parse](#parse)
    - [Flags](#flags-1)
    - [Example](#example-1)
- [Update](#update)
    - [Flags](#flags-2)
    - [Example](#example-2)

### Collect 

To collect all files from a VA, run this command: 

```shell
sail va collect {VA IP address} {flags}
``` 

This command gets all files from the VA and saves them to the current working directory (the directory you're in), unless you specify flags. 

#### Flags

You can add these flags to the the `collect` command: 
- `-o, --Output`: Set the path to save the files to. If the directory doesn't exist, the CLI creates it. The default directory is the current working directory. 
- `-c, --config`: Only get config files. 
- `-h, --help`: View the command's help with examples within the CLI.
- `-l, --logs`: Only get log files. 

#### Example

Here is an example command and response: 

```shell
sail va collect 10.10.10.10, 10.10.10.11 (-l only collect log files) (-c only collect config files) (-o /path/to/save/files)

Log Files: 
/home/sailpoint/log/ccg.log
/home/sailpoint/proxy.yaml
/home/sailpoint/stuntlog.txt

Config Files: 
/home/sailpoint/proxy.yaml
/etc/systemd/network/static.network
/etc/resolv.conf
```

### Parse

This command converts log files into a human-readable format. It's helpful when you want to troubleshoot VA issues. 

To parse log files, run this command: 

```shell
sail va parse {log file} {flags}
```

By default, this command parses all errors in the log files, not all log traffic - you can use flags to parse all log traffic. 

#### Flags

You can add these flags to the `parse` command: 
- `--canal`: Specify that the provided files are CANAL files. 
- `--ccg`: Specify that the provided files are CCG files. 
- `-e, --everything`: Parse all log traffic, not just errors. 
- `-h, --help`: View the command's help with examples within the CLI. 

#### Example

Here is an example command: 

```shell
sail va parse ./path/to/ccg.log ./path/to/ccg.log ./path/to/canal.log ./path/to/canal.log
```

### Update

To update a VA, run this command: 

```shell
sail va update {VA IP address} {flags}
```

#### Flags

You can add these flags to the `update` command:
- `-h, --help`: View the command's help with examples within the CLI.

#### Example

Here is an example command: 

```shell
sail va update 10.10.10.10 10.10.10.11 
```
