---
id: saved-search-complete-search-results-identity
title: SavedSearchCompleteSearchResultsIdentity
pagination_label: SavedSearchCompleteSearchResultsIdentity
sidebar_label: SavedSearchCompleteSearchResultsIdentity
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'SavedSearchCompleteSearchResultsIdentity'] 
slug: /tools/sdk/go/beta/models/saved-search-complete-search-results-identity
tags: ['SDK', 'Software Development Kit', 'SavedSearchCompleteSearchResultsIdentity']
---

# SavedSearchCompleteSearchResultsIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** |  **string** | The number of rows in the table. | 
**Noun** |  **string** | The type of object represented in the table. | 
**Preview** |  **[][]string** | A sample of the data in the table. | 

## Methods

### NewSavedSearchCompleteSearchResultsIdentity

`func NewSavedSearchCompleteSearchResultsIdentity(count string, noun string, preview [][]string, ) *SavedSearchCompleteSearchResultsIdentity`

NewSavedSearchCompleteSearchResultsIdentity instantiates a new SavedSearchCompleteSearchResultsIdentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSavedSearchCompleteSearchResultsIdentityWithDefaults

`func NewSavedSearchCompleteSearchResultsIdentityWithDefaults() *SavedSearchCompleteSearchResultsIdentity`

NewSavedSearchCompleteSearchResultsIdentityWithDefaults instantiates a new SavedSearchCompleteSearchResultsIdentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *SavedSearchCompleteSearchResultsIdentity) GetCount() string`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *SavedSearchCompleteSearchResultsIdentity) GetCountOk() (*string, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *SavedSearchCompleteSearchResultsIdentity) SetCount(v string)`

SetCount sets Count field to given value.


### GetNoun

`func (o *SavedSearchCompleteSearchResultsIdentity) GetNoun() string`

GetNoun returns the Noun field if non-nil, zero value otherwise.

### GetNounOk

`func (o *SavedSearchCompleteSearchResultsIdentity) GetNounOk() (*string, bool)`

GetNounOk returns a tuple with the Noun field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoun

`func (o *SavedSearchCompleteSearchResultsIdentity) SetNoun(v string)`

SetNoun sets Noun field to given value.


### GetPreview

`func (o *SavedSearchCompleteSearchResultsIdentity) GetPreview() [][]string`

GetPreview returns the Preview field if non-nil, zero value otherwise.

### GetPreviewOk

`func (o *SavedSearchCompleteSearchResultsIdentity) GetPreviewOk() (*[][]string, bool)`

GetPreviewOk returns a tuple with the Preview field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreview

`func (o *SavedSearchCompleteSearchResultsIdentity) SetPreview(v [][]string)`

SetPreview sets Preview field to given value.



[[Back to top]](#) 


