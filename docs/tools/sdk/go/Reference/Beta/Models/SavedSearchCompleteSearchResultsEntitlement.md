---
id: beta-saved-search-complete-search-results-entitlement
title: SavedSearchCompleteSearchResultsEntitlement
pagination_label: SavedSearchCompleteSearchResultsEntitlement
sidebar_label: SavedSearchCompleteSearchResultsEntitlement
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SavedSearchCompleteSearchResultsEntitlement', 'BetaSavedSearchCompleteSearchResultsEntitlement'] 
slug: /tools/sdk/go/beta/models/saved-search-complete-search-results-entitlement
tags: ['SDK', 'Software Development Kit', 'SavedSearchCompleteSearchResultsEntitlement', 'BetaSavedSearchCompleteSearchResultsEntitlement']
---

# SavedSearchCompleteSearchResultsEntitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | **string** | Number of rows in the table. | 
**Noun** | **string** | Type of object represented in the table. | 
**Preview** | **[][]string** | Sample of table data. | 

## Methods

### NewSavedSearchCompleteSearchResultsEntitlement

`func NewSavedSearchCompleteSearchResultsEntitlement(count string, noun string, preview [][]string, ) *SavedSearchCompleteSearchResultsEntitlement`

NewSavedSearchCompleteSearchResultsEntitlement instantiates a new SavedSearchCompleteSearchResultsEntitlement object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSavedSearchCompleteSearchResultsEntitlementWithDefaults

`func NewSavedSearchCompleteSearchResultsEntitlementWithDefaults() *SavedSearchCompleteSearchResultsEntitlement`

NewSavedSearchCompleteSearchResultsEntitlementWithDefaults instantiates a new SavedSearchCompleteSearchResultsEntitlement object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *SavedSearchCompleteSearchResultsEntitlement) GetCount() string`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *SavedSearchCompleteSearchResultsEntitlement) GetCountOk() (*string, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *SavedSearchCompleteSearchResultsEntitlement) SetCount(v string)`

SetCount sets Count field to given value.


### GetNoun

`func (o *SavedSearchCompleteSearchResultsEntitlement) GetNoun() string`

GetNoun returns the Noun field if non-nil, zero value otherwise.

### GetNounOk

`func (o *SavedSearchCompleteSearchResultsEntitlement) GetNounOk() (*string, bool)`

GetNounOk returns a tuple with the Noun field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoun

`func (o *SavedSearchCompleteSearchResultsEntitlement) SetNoun(v string)`

SetNoun sets Noun field to given value.


### GetPreview

`func (o *SavedSearchCompleteSearchResultsEntitlement) GetPreview() [][]string`

GetPreview returns the Preview field if non-nil, zero value otherwise.

### GetPreviewOk

`func (o *SavedSearchCompleteSearchResultsEntitlement) GetPreviewOk() (*[][]string, bool)`

GetPreviewOk returns a tuple with the Preview field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreview

`func (o *SavedSearchCompleteSearchResultsEntitlement) SetPreview(v [][]string)`

SetPreview sets Preview field to given value.



