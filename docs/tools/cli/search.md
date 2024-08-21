---
id: cli-search
title: Search
pagination_label: CLI-Search
sidebar_label: Search
sidebar_position: 3
sidebar_class_name: cli
keywords: ['cli', 'search']
description: Learn how to use the CLI to search your ISC tenant in this guide.
slug: /tools/cli/search
tags: ['CLI']
---

# Search

Learn how to use the CLI to search your ISC tenant in this guide.

In Identity Security Cloud (ISC), you can search across all the sources connected to your tenant and return virtually any information you have access to. The `search` command allows you to access ISC search functionality within the CLI. For more information about the `search` command, refer to the CLI [Search guide](./search.md). For more information about search in ISC, refer to [Search](../../api/v3/search).

In Identity Security Cloud, you can search all the sources connected to your tenant and return virtually any information you have access to. To learn more about search in Identity Security Cloud, refer to [Search](https://documentation.sailpoint.com/saas/help/search/index.html).

The `search` command makes it easy to search in Identity Security Cloud with the SailPoint CLI. Read this guide to learn how to use the `query` and `template` commands to search Identity Security Cloud with the CLI.

- [Search](#search)
  - [Query](#query)
    - [Command](#command)
    - [Flags](#flags)
      - [Indices](#indices)
      - [Sort](#sort)
      - [Folder Path](#folder-path)
  - [Template](#template)
    - [Command](#command-1)
    - [Flags](#flags-1)
      - [Folder Path](#folder-path-1)

## Query

Search queries in Identity Security Cloud are flexible - they can be very broad or very narrow, and you can further narrow your results by using Identity Security Cloud's specific syntax to structure your queries. To learn about structuring search queries, refer to [Building a Search Query](https://documentation.sailpoint.com/saas/help/search/building-query.html).

The `query` command allows you to search Identity Security Cloud for a query you specify.

To use the `query` command to search Identity Security Cloud, you must understand how to format your search queries.

The basic format of a query is "field:term", so an example `query` command would like this:

```shell
sail search query "name:a*" --indices identities
```

The CLI will use the [V3 Search endpoint](https://developer.sailpoint.com/docs/api/v3/search-post) to search for all identities starting with names starting with the letter "a". The CLI will then generate a JSON file containing the search results. This JSON file will be located in a folder titled "search_results", within the current working directory, unless a folder path is specified.

### Command

This example can help you understand the `query` command structure:

```shell
sail search query <search query string> --indices <index to search>
```

You must start your search query with `sail search query`, and you must specify a query string to search for and a set of indices to search.

### Flags

You can append a number of flags to the `query` command to refine it:

- The first flag, `indices`, is required. It specifies the indices to run the search operation on.
- The second possible flag, `sort`, allows you to specify the sort strings to use for the search query, as well as the sorting arrangement for the results.
- The third possible flag, `folderPath`, allows you to specify the folder path where you want to save the search query result files.

#### Indices

Use the `indices` flag to specify the indices you want to search. The `indices` flag is required to use the `query` command.

Here is an example of a `query` command with specified `indices`:

```shell
sail search query "name:a*" --indices identities
```

You can search multiple indices.

Here is an example of a `query` command with multiple specified `indices`.

```shell
sail search query "name:a*" --indices identities --indices accessprofiles
```

#### Sort

Use the `sort` flag to specify the sort strings you want to use to determine the sorting arrangement of your search query results. When you specify a string to sort by, like `name`, the CLI sorts results by `name` in ascending order. If you add a "-" before the sort string, like `-name`, the CLI will sort the results in descending order instead.

Here is an example of a `query` command that sorts the results in descending order based on the identities' `created` dates:

```shell
sail search query "name:a*" --indices identities --sort "-created"
```

You can specify multiple sort strings for your search queries.

Here is an example of a `query` command that sorts the results in ascending order based on `name`, as well as in descending order based on the identities' `created` dates:

```shell
sail search query "name:a*" --indices identities --sort name --sort "-created"
```

#### Folder Path

Use the `folderPath` flag to specify the folder path to save the search results in. If you don't specify a `folderPath`, the results will save to a folder called "search_results", located within your current working directory.

Here is an example of a `query` command that specifies a `folderPath`:

```shell
sail search query "name:a*" --indices identities --folderPath ./local/folder/path
```

## Template

For more detailed search queries, you can provide a predefined template instead of constructing the whole query every time. This allows you to run very detailed search queries quickly and easily.

The `template` command allows you to use predefined templates to search Identity Security Cloud.

### Command

This example shows the essential `template` command structure:

```shell
sail search template all-provisioning-events-90-days
```

The specified template file will give the CLI all the information it needs to perform its search in Identity Security Cloud.

### Flags

You can append one flag to the `template` command to refine it:

- The flag, `folderPath`, allows you to specify the folder path where you want to save the search query result files.

#### Folder Path

Use the `folderPath` flag to specify the folder path to save the search results in. If you don't specify a `folderPath`, the results will save to a folder called "search_results", located within your current working directory.

Here is an example of a `template` command that specifies a `folderPath`:

```shell
sail search template all-provisioning-events-90-days --folderPath ./local/folder/path
```
