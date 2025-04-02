---
id: saved-search-complete-search-results-account
title: SavedSearchCompleteSearchResultsAccount
pagination_label: SavedSearchCompleteSearchResultsAccount
sidebar_label: SavedSearchCompleteSearchResultsAccount
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SavedSearchCompleteSearchResultsAccount', 'SavedSearchCompleteSearchResultsAccount'] 
slug: /tools/sdk/go//models/saved-search-complete-search-results-account
tags: ['SDK', 'Software Development Kit', 'SavedSearchCompleteSearchResultsAccount', 'SavedSearchCompleteSearchResultsAccount']
---

# SavedSearchCompleteSearchResultsAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | **string** | The number of rows in the table. | 
**Noun** | **string** | The type of object represented in the table. | 
**Preview** | **[][]string** | A sample of the data in the table. | 

## Methods

### NewSavedSearchCompleteSearchResultsAccount

`func NewSavedSearchCompleteSearchResultsAccount(count string, noun string, preview [][]string, ) *SavedSearchCompleteSearchResultsAccount`

NewSavedSearchCompleteSearchResultsAccount instantiates a new SavedSearchCompleteSearchResultsAccount object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSavedSearchCompleteSearchResultsAccountWithDefaults

`func NewSavedSearchCompleteSearchResultsAccountWithDefaults() *SavedSearchCompleteSearchResultsAccount`

NewSavedSearchCompleteSearchResultsAccountWithDefaults instantiates a new SavedSearchCompleteSearchResultsAccount object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *SavedSearchCompleteSearchResultsAccount) GetCount() string`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *SavedSearchCompleteSearchResultsAccount) GetCountOk() (*string, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *SavedSearchCompleteSearchResultsAccount) SetCount(v string)`

SetCount sets Count field to given value.


### GetNoun

`func (o *SavedSearchCompleteSearchResultsAccount) GetNoun() string`

GetNoun returns the Noun field if non-nil, zero value otherwise.

### GetNounOk

`func (o *SavedSearchCompleteSearchResultsAccount) GetNounOk() (*string, bool)`

GetNounOk returns a tuple with the Noun field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoun

`func (o *SavedSearchCompleteSearchResultsAccount) SetNoun(v string)`

SetNoun sets Noun field to given value.


### GetPreview

`func (o *SavedSearchCompleteSearchResultsAccount) GetPreview() [][]string`

GetPreview returns the Preview field if non-nil, zero value otherwise.

### GetPreviewOk

`func (o *SavedSearchCompleteSearchResultsAccount) GetPreviewOk() (*[][]string, bool)`

GetPreviewOk returns a tuple with the Preview field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreview

`func (o *SavedSearchCompleteSearchResultsAccount) SetPreview(v [][]string)`

SetPreview sets Preview field to given value.



