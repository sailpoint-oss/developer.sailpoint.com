---
id: cli-search
title: cli-search
pagination_label: CLI-Search
sidebar_label: CLI-Search
sidebar_position: 3
sidebar_class_name: cli
keywords: ['cli', 'search']
description: Learn how to use the CLI to search your IDN tenant in this guide. 
slug: /tools/cli/search
tags: ['CLI']
---

## Search

Learn how to use the CLI to search your IDN tenant in this guide. 

In IdentityNow (IDN), you can search across all the sources connected to your tenant and return virtually any information you have access to. The `search` command allows you to access IDN search functionality within the CLI. For more information about the `search` command, refer to the CLI [Search guide](https://developer.sailpoint.com/idn/tools/cli/search). For more information about search in IDN, refer to [Search](https://developer.sailpoint.com/idn/api/v3/search).

## Commands 

To use the CLI to search your IDN tenant, you can use these commands: 

- [Query](#query)
    - [[Indices](#indices)
    - [Sort](#sort)
    - Output Types
    - Folder Path
- [Template](#template)

### Query

Search queries in IDN are flexible - they can be very broad or very narrow, and you can further narrow your results by using IDN's specific syntax to structure your queries. Refer to [Building a Search Query](https://documentation.sailpoint.com/saas/help/search/building-query.html) for more information about how specific search queries are constructed in IDN. 

To create a search query, run this command and provide your desired search attributes: 

```shell
sail search query {search query string} -indices {index to search}
```
For example, running this command would return all identities starting with the letter "a":

```shell
sail search query "name:a*" -indices identities 
```

#### Indices

To specify the indices you want to search, use the `-indices` flag. The following indices are searchable: identities, roles, access profiles, entitlements, events, and account activities. 

The earlier example shows how to specify a single index in a search query. You can also search multiple indices. For example, running this command would return all identities and access profiles starting with the letter "a":

```shell
sail search query "name:a*" -indices identities -indices accessprofiles
```

#### Sort

To specify the sort strings your search query uses, use the `-sort` flag. For example, running this command would sort search results by starting with the letter "a" first by the `name` attribute in ascending order and then the `created` attribute in descending order, as indicated by the `-` prefix:

```shell
sail search query "name:a*" -indices identities -sort name -sort "-created" 
```

#### Output Types

To specify the output data type, use the `-outputTypes` flag. Currently only `csv` and `json` types are supported. In this example, running this command would return search results in a `json` output: 

```shell
sail search query "name:a*" -indicies identities -outputTypes json
```

#### Folder Path

To specify the folder path you want to save the search results in, use the `-folderPath` flag. For example, running this command would save search results to "./local/folder/path": 

```shell
sail search query "name:a*" -indicies identities -folderPath ./local/folder/path
```

### Template 

For more detailed search queries, you can provide a predefined template instead of constructing the whole query every time. This allows you to run very detailed search queries quickly and easily. To search with a predefined template, run this command and provide your template filename: 

```shell
sail search template {template name}
```
For example, if you had a template, "all-provisioning-events-90-days," which provided everything you needed to search for all provisioning events performed within your tenant in the last 90 days, you could run this command to search with the template: 

```shell
sail search template all-provisioning-events-90-days
```

#### Output Types

To specify the output data type, use the `-outputTypes` flag. Currently only `csv` and `json` types are supported. In this example, running this command would return search results in a `json` output: 

```shell
sail search template all-provisioning-events-90-days -outputTypes json
```

#### Folder Path

To specify the folder path you want to save the search results in, use the `-folderPath` flag. For example, running this command would save search results to "./local/folder/path": 

```shell
sail search template all-provisioning-events-90-days -folderPath ./local/folder/path
```


