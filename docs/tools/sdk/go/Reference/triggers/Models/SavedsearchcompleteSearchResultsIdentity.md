---
id: v1-savedsearchcomplete-search-results-identity
title: SavedsearchcompleteSearchResultsIdentity
pagination_label: SavedsearchcompleteSearchResultsIdentity
sidebar_label: SavedsearchcompleteSearchResultsIdentity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SavedsearchcompleteSearchResultsIdentity', 'V1SavedsearchcompleteSearchResultsIdentity'] 
slug: /tools/sdk/go/triggers/models/savedsearchcomplete-search-results-identity
tags: ['SDK', 'Software Development Kit', 'SavedsearchcompleteSearchResultsIdentity', 'V1SavedsearchcompleteSearchResultsIdentity']
---

# SavedsearchcompleteSearchResultsIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | **string** | The number of rows in the table. | 
**Noun** | **string** | The type of object represented in the table. | 
**Preview** | **[][]string** | A sample of the data in the table. | 

## Methods

### NewSavedsearchcompleteSearchResultsIdentity

`func NewSavedsearchcompleteSearchResultsIdentity(count string, noun string, preview [][]string, ) *SavedsearchcompleteSearchResultsIdentity`

NewSavedsearchcompleteSearchResultsIdentity instantiates a new SavedsearchcompleteSearchResultsIdentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSavedsearchcompleteSearchResultsIdentityWithDefaults

`func NewSavedsearchcompleteSearchResultsIdentityWithDefaults() *SavedsearchcompleteSearchResultsIdentity`

NewSavedsearchcompleteSearchResultsIdentityWithDefaults instantiates a new SavedsearchcompleteSearchResultsIdentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *SavedsearchcompleteSearchResultsIdentity) GetCount() string`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *SavedsearchcompleteSearchResultsIdentity) GetCountOk() (*string, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *SavedsearchcompleteSearchResultsIdentity) SetCount(v string)`

SetCount sets Count field to given value.


### GetNoun

`func (o *SavedsearchcompleteSearchResultsIdentity) GetNoun() string`

GetNoun returns the Noun field if non-nil, zero value otherwise.

### GetNounOk

`func (o *SavedsearchcompleteSearchResultsIdentity) GetNounOk() (*string, bool)`

GetNounOk returns a tuple with the Noun field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoun

`func (o *SavedsearchcompleteSearchResultsIdentity) SetNoun(v string)`

SetNoun sets Noun field to given value.


### GetPreview

`func (o *SavedsearchcompleteSearchResultsIdentity) GetPreview() [][]string`

GetPreview returns the Preview field if non-nil, zero value otherwise.

### GetPreviewOk

`func (o *SavedsearchcompleteSearchResultsIdentity) GetPreviewOk() (*[][]string, bool)`

GetPreviewOk returns a tuple with the Preview field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreview

`func (o *SavedsearchcompleteSearchResultsIdentity) SetPreview(v [][]string)`

SetPreview sets Preview field to given value.



