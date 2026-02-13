---
id: v2025-application-crawler-settings
title: ApplicationCrawlerSettings
pagination_label: ApplicationCrawlerSettings
sidebar_label: ApplicationCrawlerSettings
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApplicationCrawlerSettings', 'V2025ApplicationCrawlerSettings'] 
slug: /tools/sdk/go/v2025/models/application-crawler-settings
tags: ['SDK', 'Software Development Kit', 'ApplicationCrawlerSettings', 'V2025ApplicationCrawlerSettings']
---

# ApplicationCrawlerSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsEnabled** | Pointer to **bool** | Indicates whether the feature or configuration is enabled. | [optional] [default to false]
**ClusterId** | Pointer to **NullableString** | The identifier of the cluster associated with this configuration, if applicable. | [optional] 
**CalculateResourceSize** | Pointer to [**CrawlResourcesSizesOptions**](crawl-resources-sizes-options) |  | [optional] 
**CrawlSnapshotsFolder** | Pointer to **NullableBool** | Indicates whether to crawl the snapshots folder. | [optional] [default to false]
**CrawlMailboxes** | Pointer to **NullableBool** | Indicates whether to crawl mailboxes. | [optional] [default to false]
**CrawlPublicFolders** | Pointer to **NullableBool** | Indicates whether to crawl public folders. | [optional] [default to false]
**ExcludedPathsByRegex** | Pointer to **NullableString** | Regular expression pattern for paths to exclude from crawling. | [optional] 
**CrawlTopLevelShares** | Pointer to **[]string** | List of top-level shares to crawl. | [optional] 
**ExcludedResources** | Pointer to **[]string** | List of resource identifiers to exclude from crawling. | [optional] 
**IncludeResources** | Pointer to **[]string** | List of resource identifiers to include in crawling. | [optional] 

## Methods

### NewApplicationCrawlerSettings

`func NewApplicationCrawlerSettings() *ApplicationCrawlerSettings`

NewApplicationCrawlerSettings instantiates a new ApplicationCrawlerSettings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApplicationCrawlerSettingsWithDefaults

`func NewApplicationCrawlerSettingsWithDefaults() *ApplicationCrawlerSettings`

NewApplicationCrawlerSettingsWithDefaults instantiates a new ApplicationCrawlerSettings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIsEnabled

`func (o *ApplicationCrawlerSettings) GetIsEnabled() bool`

GetIsEnabled returns the IsEnabled field if non-nil, zero value otherwise.

### GetIsEnabledOk

`func (o *ApplicationCrawlerSettings) GetIsEnabledOk() (*bool, bool)`

GetIsEnabledOk returns a tuple with the IsEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsEnabled

`func (o *ApplicationCrawlerSettings) SetIsEnabled(v bool)`

SetIsEnabled sets IsEnabled field to given value.

### HasIsEnabled

`func (o *ApplicationCrawlerSettings) HasIsEnabled() bool`

HasIsEnabled returns a boolean if a field has been set.

### GetClusterId

`func (o *ApplicationCrawlerSettings) GetClusterId() string`

GetClusterId returns the ClusterId field if non-nil, zero value otherwise.

### GetClusterIdOk

`func (o *ApplicationCrawlerSettings) GetClusterIdOk() (*string, bool)`

GetClusterIdOk returns a tuple with the ClusterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClusterId

`func (o *ApplicationCrawlerSettings) SetClusterId(v string)`

SetClusterId sets ClusterId field to given value.

### HasClusterId

`func (o *ApplicationCrawlerSettings) HasClusterId() bool`

HasClusterId returns a boolean if a field has been set.

### SetClusterIdNil

`func (o *ApplicationCrawlerSettings) SetClusterIdNil(b bool)`

 SetClusterIdNil sets the value for ClusterId to be an explicit nil

### UnsetClusterId
`func (o *ApplicationCrawlerSettings) UnsetClusterId()`

UnsetClusterId ensures that no value is present for ClusterId, not even an explicit nil
### GetCalculateResourceSize

`func (o *ApplicationCrawlerSettings) GetCalculateResourceSize() CrawlResourcesSizesOptions`

GetCalculateResourceSize returns the CalculateResourceSize field if non-nil, zero value otherwise.

### GetCalculateResourceSizeOk

`func (o *ApplicationCrawlerSettings) GetCalculateResourceSizeOk() (*CrawlResourcesSizesOptions, bool)`

GetCalculateResourceSizeOk returns a tuple with the CalculateResourceSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalculateResourceSize

`func (o *ApplicationCrawlerSettings) SetCalculateResourceSize(v CrawlResourcesSizesOptions)`

SetCalculateResourceSize sets CalculateResourceSize field to given value.

### HasCalculateResourceSize

`func (o *ApplicationCrawlerSettings) HasCalculateResourceSize() bool`

HasCalculateResourceSize returns a boolean if a field has been set.

### GetCrawlSnapshotsFolder

`func (o *ApplicationCrawlerSettings) GetCrawlSnapshotsFolder() bool`

GetCrawlSnapshotsFolder returns the CrawlSnapshotsFolder field if non-nil, zero value otherwise.

### GetCrawlSnapshotsFolderOk

`func (o *ApplicationCrawlerSettings) GetCrawlSnapshotsFolderOk() (*bool, bool)`

GetCrawlSnapshotsFolderOk returns a tuple with the CrawlSnapshotsFolder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCrawlSnapshotsFolder

`func (o *ApplicationCrawlerSettings) SetCrawlSnapshotsFolder(v bool)`

SetCrawlSnapshotsFolder sets CrawlSnapshotsFolder field to given value.

### HasCrawlSnapshotsFolder

`func (o *ApplicationCrawlerSettings) HasCrawlSnapshotsFolder() bool`

HasCrawlSnapshotsFolder returns a boolean if a field has been set.

### SetCrawlSnapshotsFolderNil

`func (o *ApplicationCrawlerSettings) SetCrawlSnapshotsFolderNil(b bool)`

 SetCrawlSnapshotsFolderNil sets the value for CrawlSnapshotsFolder to be an explicit nil

### UnsetCrawlSnapshotsFolder
`func (o *ApplicationCrawlerSettings) UnsetCrawlSnapshotsFolder()`

UnsetCrawlSnapshotsFolder ensures that no value is present for CrawlSnapshotsFolder, not even an explicit nil
### GetCrawlMailboxes

`func (o *ApplicationCrawlerSettings) GetCrawlMailboxes() bool`

GetCrawlMailboxes returns the CrawlMailboxes field if non-nil, zero value otherwise.

### GetCrawlMailboxesOk

`func (o *ApplicationCrawlerSettings) GetCrawlMailboxesOk() (*bool, bool)`

GetCrawlMailboxesOk returns a tuple with the CrawlMailboxes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCrawlMailboxes

`func (o *ApplicationCrawlerSettings) SetCrawlMailboxes(v bool)`

SetCrawlMailboxes sets CrawlMailboxes field to given value.

### HasCrawlMailboxes

`func (o *ApplicationCrawlerSettings) HasCrawlMailboxes() bool`

HasCrawlMailboxes returns a boolean if a field has been set.

### SetCrawlMailboxesNil

`func (o *ApplicationCrawlerSettings) SetCrawlMailboxesNil(b bool)`

 SetCrawlMailboxesNil sets the value for CrawlMailboxes to be an explicit nil

### UnsetCrawlMailboxes
`func (o *ApplicationCrawlerSettings) UnsetCrawlMailboxes()`

UnsetCrawlMailboxes ensures that no value is present for CrawlMailboxes, not even an explicit nil
### GetCrawlPublicFolders

`func (o *ApplicationCrawlerSettings) GetCrawlPublicFolders() bool`

GetCrawlPublicFolders returns the CrawlPublicFolders field if non-nil, zero value otherwise.

### GetCrawlPublicFoldersOk

`func (o *ApplicationCrawlerSettings) GetCrawlPublicFoldersOk() (*bool, bool)`

GetCrawlPublicFoldersOk returns a tuple with the CrawlPublicFolders field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCrawlPublicFolders

`func (o *ApplicationCrawlerSettings) SetCrawlPublicFolders(v bool)`

SetCrawlPublicFolders sets CrawlPublicFolders field to given value.

### HasCrawlPublicFolders

`func (o *ApplicationCrawlerSettings) HasCrawlPublicFolders() bool`

HasCrawlPublicFolders returns a boolean if a field has been set.

### SetCrawlPublicFoldersNil

`func (o *ApplicationCrawlerSettings) SetCrawlPublicFoldersNil(b bool)`

 SetCrawlPublicFoldersNil sets the value for CrawlPublicFolders to be an explicit nil

### UnsetCrawlPublicFolders
`func (o *ApplicationCrawlerSettings) UnsetCrawlPublicFolders()`

UnsetCrawlPublicFolders ensures that no value is present for CrawlPublicFolders, not even an explicit nil
### GetExcludedPathsByRegex

`func (o *ApplicationCrawlerSettings) GetExcludedPathsByRegex() string`

GetExcludedPathsByRegex returns the ExcludedPathsByRegex field if non-nil, zero value otherwise.

### GetExcludedPathsByRegexOk

`func (o *ApplicationCrawlerSettings) GetExcludedPathsByRegexOk() (*string, bool)`

GetExcludedPathsByRegexOk returns a tuple with the ExcludedPathsByRegex field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludedPathsByRegex

`func (o *ApplicationCrawlerSettings) SetExcludedPathsByRegex(v string)`

SetExcludedPathsByRegex sets ExcludedPathsByRegex field to given value.

### HasExcludedPathsByRegex

`func (o *ApplicationCrawlerSettings) HasExcludedPathsByRegex() bool`

HasExcludedPathsByRegex returns a boolean if a field has been set.

### SetExcludedPathsByRegexNil

`func (o *ApplicationCrawlerSettings) SetExcludedPathsByRegexNil(b bool)`

 SetExcludedPathsByRegexNil sets the value for ExcludedPathsByRegex to be an explicit nil

### UnsetExcludedPathsByRegex
`func (o *ApplicationCrawlerSettings) UnsetExcludedPathsByRegex()`

UnsetExcludedPathsByRegex ensures that no value is present for ExcludedPathsByRegex, not even an explicit nil
### GetCrawlTopLevelShares

`func (o *ApplicationCrawlerSettings) GetCrawlTopLevelShares() []string`

GetCrawlTopLevelShares returns the CrawlTopLevelShares field if non-nil, zero value otherwise.

### GetCrawlTopLevelSharesOk

`func (o *ApplicationCrawlerSettings) GetCrawlTopLevelSharesOk() (*[]string, bool)`

GetCrawlTopLevelSharesOk returns a tuple with the CrawlTopLevelShares field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCrawlTopLevelShares

`func (o *ApplicationCrawlerSettings) SetCrawlTopLevelShares(v []string)`

SetCrawlTopLevelShares sets CrawlTopLevelShares field to given value.

### HasCrawlTopLevelShares

`func (o *ApplicationCrawlerSettings) HasCrawlTopLevelShares() bool`

HasCrawlTopLevelShares returns a boolean if a field has been set.

### SetCrawlTopLevelSharesNil

`func (o *ApplicationCrawlerSettings) SetCrawlTopLevelSharesNil(b bool)`

 SetCrawlTopLevelSharesNil sets the value for CrawlTopLevelShares to be an explicit nil

### UnsetCrawlTopLevelShares
`func (o *ApplicationCrawlerSettings) UnsetCrawlTopLevelShares()`

UnsetCrawlTopLevelShares ensures that no value is present for CrawlTopLevelShares, not even an explicit nil
### GetExcludedResources

`func (o *ApplicationCrawlerSettings) GetExcludedResources() []string`

GetExcludedResources returns the ExcludedResources field if non-nil, zero value otherwise.

### GetExcludedResourcesOk

`func (o *ApplicationCrawlerSettings) GetExcludedResourcesOk() (*[]string, bool)`

GetExcludedResourcesOk returns a tuple with the ExcludedResources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludedResources

`func (o *ApplicationCrawlerSettings) SetExcludedResources(v []string)`

SetExcludedResources sets ExcludedResources field to given value.

### HasExcludedResources

`func (o *ApplicationCrawlerSettings) HasExcludedResources() bool`

HasExcludedResources returns a boolean if a field has been set.

### SetExcludedResourcesNil

`func (o *ApplicationCrawlerSettings) SetExcludedResourcesNil(b bool)`

 SetExcludedResourcesNil sets the value for ExcludedResources to be an explicit nil

### UnsetExcludedResources
`func (o *ApplicationCrawlerSettings) UnsetExcludedResources()`

UnsetExcludedResources ensures that no value is present for ExcludedResources, not even an explicit nil
### GetIncludeResources

`func (o *ApplicationCrawlerSettings) GetIncludeResources() []string`

GetIncludeResources returns the IncludeResources field if non-nil, zero value otherwise.

### GetIncludeResourcesOk

`func (o *ApplicationCrawlerSettings) GetIncludeResourcesOk() (*[]string, bool)`

GetIncludeResourcesOk returns a tuple with the IncludeResources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeResources

`func (o *ApplicationCrawlerSettings) SetIncludeResources(v []string)`

SetIncludeResources sets IncludeResources field to given value.

### HasIncludeResources

`func (o *ApplicationCrawlerSettings) HasIncludeResources() bool`

HasIncludeResources returns a boolean if a field has been set.

### SetIncludeResourcesNil

`func (o *ApplicationCrawlerSettings) SetIncludeResourcesNil(b bool)`

 SetIncludeResourcesNil sets the value for IncludeResources to be an explicit nil

### UnsetIncludeResources
`func (o *ApplicationCrawlerSettings) UnsetIncludeResources()`

UnsetIncludeResources ensures that no value is present for IncludeResources, not even an explicit nil

