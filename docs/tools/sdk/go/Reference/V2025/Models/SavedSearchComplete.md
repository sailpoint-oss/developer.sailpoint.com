---
id: saved-search-complete
title: SavedSearchComplete
pagination_label: SavedSearchComplete
sidebar_label: SavedSearchComplete
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SavedSearchComplete', 'SavedSearchComplete'] 
slug: /tools/sdk/go//models/saved-search-complete
tags: ['SDK', 'Software Development Kit', 'SavedSearchComplete', 'SavedSearchComplete']
---

# SavedSearchComplete

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FileName** | **string** | A name for the report file. | 
**OwnerEmail** | **string** | The email address of the identity that owns the saved search. | 
**OwnerName** | **string** | The name of the identity that owns the saved search. | 
**Query** | **string** | The search query that was used to generate the report. | 
**SearchName** | **string** | The name of the saved search. | 
**SearchResults** | [**SavedSearchCompleteSearchResults**](saved-search-complete-search-results) |  | 
**SignedS3Url** | **string** | The Amazon S3 URL to download the report from. | 

## Methods

### NewSavedSearchComplete

`func NewSavedSearchComplete(fileName string, ownerEmail string, ownerName string, query string, searchName string, searchResults SavedSearchCompleteSearchResults, signedS3Url string, ) *SavedSearchComplete`

NewSavedSearchComplete instantiates a new SavedSearchComplete object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSavedSearchCompleteWithDefaults

`func NewSavedSearchCompleteWithDefaults() *SavedSearchComplete`

NewSavedSearchCompleteWithDefaults instantiates a new SavedSearchComplete object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFileName

`func (o *SavedSearchComplete) GetFileName() string`

GetFileName returns the FileName field if non-nil, zero value otherwise.

### GetFileNameOk

`func (o *SavedSearchComplete) GetFileNameOk() (*string, bool)`

GetFileNameOk returns a tuple with the FileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileName

`func (o *SavedSearchComplete) SetFileName(v string)`

SetFileName sets FileName field to given value.


### GetOwnerEmail

`func (o *SavedSearchComplete) GetOwnerEmail() string`

GetOwnerEmail returns the OwnerEmail field if non-nil, zero value otherwise.

### GetOwnerEmailOk

`func (o *SavedSearchComplete) GetOwnerEmailOk() (*string, bool)`

GetOwnerEmailOk returns a tuple with the OwnerEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerEmail

`func (o *SavedSearchComplete) SetOwnerEmail(v string)`

SetOwnerEmail sets OwnerEmail field to given value.


### GetOwnerName

`func (o *SavedSearchComplete) GetOwnerName() string`

GetOwnerName returns the OwnerName field if non-nil, zero value otherwise.

### GetOwnerNameOk

`func (o *SavedSearchComplete) GetOwnerNameOk() (*string, bool)`

GetOwnerNameOk returns a tuple with the OwnerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerName

`func (o *SavedSearchComplete) SetOwnerName(v string)`

SetOwnerName sets OwnerName field to given value.


### GetQuery

`func (o *SavedSearchComplete) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *SavedSearchComplete) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *SavedSearchComplete) SetQuery(v string)`

SetQuery sets Query field to given value.


### GetSearchName

`func (o *SavedSearchComplete) GetSearchName() string`

GetSearchName returns the SearchName field if non-nil, zero value otherwise.

### GetSearchNameOk

`func (o *SavedSearchComplete) GetSearchNameOk() (*string, bool)`

GetSearchNameOk returns a tuple with the SearchName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchName

`func (o *SavedSearchComplete) SetSearchName(v string)`

SetSearchName sets SearchName field to given value.


### GetSearchResults

`func (o *SavedSearchComplete) GetSearchResults() SavedSearchCompleteSearchResults`

GetSearchResults returns the SearchResults field if non-nil, zero value otherwise.

### GetSearchResultsOk

`func (o *SavedSearchComplete) GetSearchResultsOk() (*SavedSearchCompleteSearchResults, bool)`

GetSearchResultsOk returns a tuple with the SearchResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchResults

`func (o *SavedSearchComplete) SetSearchResults(v SavedSearchCompleteSearchResults)`

SetSearchResults sets SearchResults field to given value.


### GetSignedS3Url

`func (o *SavedSearchComplete) GetSignedS3Url() string`

GetSignedS3Url returns the SignedS3Url field if non-nil, zero value otherwise.

### GetSignedS3UrlOk

`func (o *SavedSearchComplete) GetSignedS3UrlOk() (*string, bool)`

GetSignedS3UrlOk returns a tuple with the SignedS3Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignedS3Url

`func (o *SavedSearchComplete) SetSignedS3Url(v string)`

SetSignedS3Url sets SignedS3Url field to given value.



