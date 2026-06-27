---
id: applicationcrawlersettings
title: Applicationcrawlersettings
pagination_label: Applicationcrawlersettings
sidebar_label: Applicationcrawlersettings
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Applicationcrawlersettings', 'Applicationcrawlersettings'] 
slug: /tools/sdk/python/data-access-security/models/applicationcrawlersettings
tags: ['SDK', 'Software Development Kit', 'Applicationcrawlersettings', 'Applicationcrawlersettings']
---

# Applicationcrawlersettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_enabled** | **bool** | Indicates whether the feature or configuration is enabled. | [optional] [default to False]
**cluster_id** | **str** | The identifier of the cluster associated with this configuration, if applicable. | [optional] 
**calculate_resource_size** | [**Crawlresourcessizesoptions**](crawlresourcessizesoptions) |  | [optional] 
**crawl_snapshots_folder** | **bool** | Indicates whether to crawl the snapshots folder. | [optional] [default to False]
**crawl_mailboxes** | **bool** | Indicates whether to crawl mailboxes. | [optional] [default to False]
**crawl_public_folders** | **bool** | Indicates whether to crawl public folders. | [optional] [default to False]
**excluded_paths_by_regex** | **str** | Regular expression pattern for paths to exclude from crawling. | [optional] 
**crawl_top_level_shares** | **[]str** | List of top-level shares to crawl. | [optional] 
**excluded_resources** | **[]str** | List of resource identifiers to exclude from crawling. | [optional] 
**include_resources** | **[]str** | List of resource identifiers to include in crawling. | [optional] 
}

## Example

```python
from sailpoint.data_access_security.models.applicationcrawlersettings import Applicationcrawlersettings

applicationcrawlersettings = Applicationcrawlersettings(
is_enabled=True,
cluster_id='cluster-001',
calculate_resource_size=2,
crawl_snapshots_folder=True,
crawl_mailboxes=False,
crawl_public_folders=True,
excluded_paths_by_regex='^/archive/.*',
crawl_top_level_shares=["share1","share2"],
excluded_resources=["resourceA","resourceB"],
include_resources=["resourceX","resourceY"]
)

```
[[Back to top]](#) 

