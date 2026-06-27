---
id: v1-savedsearchcomplete-search-results-entitlement
title: SavedsearchcompleteSearchResultsEntitlement
pagination_label: SavedsearchcompleteSearchResultsEntitlement
sidebar_label: SavedsearchcompleteSearchResultsEntitlement
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SavedsearchcompleteSearchResultsEntitlement', 'V1SavedsearchcompleteSearchResultsEntitlement'] 
slug: /tools/sdk/go/triggers/models/savedsearchcomplete-search-results-entitlement
tags: ['SDK', 'Software Development Kit', 'SavedsearchcompleteSearchResultsEntitlement', 'V1SavedsearchcompleteSearchResultsEntitlement']
---

# SavedsearchcompleteSearchResultsEntitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | **string** | The number of rows in the table. | 
**Noun** | **string** | The type of object represented in the table. | 
**Preview** | **[][]string** | A sample of the data in the table. | 

## Methods

### NewSavedsearchcompleteSearchResultsEntitlement

`func NewSavedsearchcompleteSearchResultsEntitlement(count string, noun string, preview [][]string, ) *SavedsearchcompleteSearchResultsEntitlement`

NewSavedsearchcompleteSearchResultsEntitlement instantiates a new SavedsearchcompleteSearchResultsEntitlement object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSavedsearchcompleteSearchResultsEntitlementWithDefaults

`func NewSavedsearchcompleteSearchResultsEntitlementWithDefaults() *SavedsearchcompleteSearchResultsEntitlement`

NewSavedsearchcompleteSearchResultsEntitlementWithDefaults instantiates a new SavedsearchcompleteSearchResultsEntitlement object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *SavedsearchcompleteSearchResultsEntitlement) GetCount() string`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *SavedsearchcompleteSearchResultsEntitlement) GetCountOk() (*string, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *SavedsearchcompleteSearchResultsEntitlement) SetCount(v string)`

SetCount sets Count field to given value.


### GetNoun

`func (o *SavedsearchcompleteSearchResultsEntitlement) GetNoun() string`

GetNoun returns the Noun field if non-nil, zero value otherwise.

### GetNounOk

`func (o *SavedsearchcompleteSearchResultsEntitlement) GetNounOk() (*string, bool)`

GetNounOk returns a tuple with the Noun field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoun

`func (o *SavedsearchcompleteSearchResultsEntitlement) SetNoun(v string)`

SetNoun sets Noun field to given value.


### GetPreview

`func (o *SavedsearchcompleteSearchResultsEntitlement) GetPreview() [][]string`

GetPreview returns the Preview field if non-nil, zero value otherwise.

### GetPreviewOk

`func (o *SavedsearchcompleteSearchResultsEntitlement) GetPreviewOk() (*[][]string, bool)`

GetPreviewOk returns a tuple with the Preview field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreview

`func (o *SavedsearchcompleteSearchResultsEntitlement) SetPreview(v [][]string)`

SetPreview sets Preview field to given value.



