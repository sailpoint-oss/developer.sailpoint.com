---
id: v1-savedsearchcomplete-search-results-account
title: SavedsearchcompleteSearchResultsAccount
pagination_label: SavedsearchcompleteSearchResultsAccount
sidebar_label: SavedsearchcompleteSearchResultsAccount
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SavedsearchcompleteSearchResultsAccount', 'V1SavedsearchcompleteSearchResultsAccount'] 
slug: /tools/sdk/go/triggers/models/savedsearchcomplete-search-results-account
tags: ['SDK', 'Software Development Kit', 'SavedsearchcompleteSearchResultsAccount', 'V1SavedsearchcompleteSearchResultsAccount']
---

# SavedsearchcompleteSearchResultsAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | **string** | The number of rows in the table. | 
**Noun** | **string** | The type of object represented in the table. | 
**Preview** | **[][]string** | A sample of the data in the table. | 

## Methods

### NewSavedsearchcompleteSearchResultsAccount

`func NewSavedsearchcompleteSearchResultsAccount(count string, noun string, preview [][]string, ) *SavedsearchcompleteSearchResultsAccount`

NewSavedsearchcompleteSearchResultsAccount instantiates a new SavedsearchcompleteSearchResultsAccount object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSavedsearchcompleteSearchResultsAccountWithDefaults

`func NewSavedsearchcompleteSearchResultsAccountWithDefaults() *SavedsearchcompleteSearchResultsAccount`

NewSavedsearchcompleteSearchResultsAccountWithDefaults instantiates a new SavedsearchcompleteSearchResultsAccount object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *SavedsearchcompleteSearchResultsAccount) GetCount() string`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *SavedsearchcompleteSearchResultsAccount) GetCountOk() (*string, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *SavedsearchcompleteSearchResultsAccount) SetCount(v string)`

SetCount sets Count field to given value.


### GetNoun

`func (o *SavedsearchcompleteSearchResultsAccount) GetNoun() string`

GetNoun returns the Noun field if non-nil, zero value otherwise.

### GetNounOk

`func (o *SavedsearchcompleteSearchResultsAccount) GetNounOk() (*string, bool)`

GetNounOk returns a tuple with the Noun field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoun

`func (o *SavedsearchcompleteSearchResultsAccount) SetNoun(v string)`

SetNoun sets Noun field to given value.


### GetPreview

`func (o *SavedsearchcompleteSearchResultsAccount) GetPreview() [][]string`

GetPreview returns the Preview field if non-nil, zero value otherwise.

### GetPreviewOk

`func (o *SavedsearchcompleteSearchResultsAccount) GetPreviewOk() (*[][]string, bool)`

GetPreviewOk returns a tuple with the Preview field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreview

`func (o *SavedsearchcompleteSearchResultsAccount) SetPreview(v [][]string)`

SetPreview sets Preview field to given value.



