---
id: v1-savedsearchcomplete
title: Savedsearchcomplete
pagination_label: Savedsearchcomplete
sidebar_label: Savedsearchcomplete
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Savedsearchcomplete', 'V1Savedsearchcomplete'] 
slug: /tools/sdk/go/triggers/models/savedsearchcomplete
tags: ['SDK', 'Software Development Kit', 'Savedsearchcomplete', 'V1Savedsearchcomplete']
---

# Savedsearchcomplete

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FileName** | **string** | A name for the report file. | 
**OwnerEmail** | **string** | The email address of the identity that owns the saved search. | 
**OwnerName** | **string** | The name of the identity that owns the saved search. | 
**Query** | **string** | The search query that was used to generate the report. | 
**SearchName** | **string** | The name of the saved search. | 
**SearchResults** | [**SavedsearchcompleteSearchResults**](savedsearchcomplete-search-results) |  | 
**SignedS3Url** | **string** | The Amazon S3 URL to download the report from. | 

## Methods

### NewSavedsearchcomplete

`func NewSavedsearchcomplete(fileName string, ownerEmail string, ownerName string, query string, searchName string, searchResults SavedsearchcompleteSearchResults, signedS3Url string, ) *Savedsearchcomplete`

NewSavedsearchcomplete instantiates a new Savedsearchcomplete object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSavedsearchcompleteWithDefaults

`func NewSavedsearchcompleteWithDefaults() *Savedsearchcomplete`

NewSavedsearchcompleteWithDefaults instantiates a new Savedsearchcomplete object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFileName

`func (o *Savedsearchcomplete) GetFileName() string`

GetFileName returns the FileName field if non-nil, zero value otherwise.

### GetFileNameOk

`func (o *Savedsearchcomplete) GetFileNameOk() (*string, bool)`

GetFileNameOk returns a tuple with the FileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileName

`func (o *Savedsearchcomplete) SetFileName(v string)`

SetFileName sets FileName field to given value.


### GetOwnerEmail

`func (o *Savedsearchcomplete) GetOwnerEmail() string`

GetOwnerEmail returns the OwnerEmail field if non-nil, zero value otherwise.

### GetOwnerEmailOk

`func (o *Savedsearchcomplete) GetOwnerEmailOk() (*string, bool)`

GetOwnerEmailOk returns a tuple with the OwnerEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerEmail

`func (o *Savedsearchcomplete) SetOwnerEmail(v string)`

SetOwnerEmail sets OwnerEmail field to given value.


### GetOwnerName

`func (o *Savedsearchcomplete) GetOwnerName() string`

GetOwnerName returns the OwnerName field if non-nil, zero value otherwise.

### GetOwnerNameOk

`func (o *Savedsearchcomplete) GetOwnerNameOk() (*string, bool)`

GetOwnerNameOk returns a tuple with the OwnerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerName

`func (o *Savedsearchcomplete) SetOwnerName(v string)`

SetOwnerName sets OwnerName field to given value.


### GetQuery

`func (o *Savedsearchcomplete) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *Savedsearchcomplete) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *Savedsearchcomplete) SetQuery(v string)`

SetQuery sets Query field to given value.


### GetSearchName

`func (o *Savedsearchcomplete) GetSearchName() string`

GetSearchName returns the SearchName field if non-nil, zero value otherwise.

### GetSearchNameOk

`func (o *Savedsearchcomplete) GetSearchNameOk() (*string, bool)`

GetSearchNameOk returns a tuple with the SearchName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchName

`func (o *Savedsearchcomplete) SetSearchName(v string)`

SetSearchName sets SearchName field to given value.


### GetSearchResults

`func (o *Savedsearchcomplete) GetSearchResults() SavedsearchcompleteSearchResults`

GetSearchResults returns the SearchResults field if non-nil, zero value otherwise.

### GetSearchResultsOk

`func (o *Savedsearchcomplete) GetSearchResultsOk() (*SavedsearchcompleteSearchResults, bool)`

GetSearchResultsOk returns a tuple with the SearchResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchResults

`func (o *Savedsearchcomplete) SetSearchResults(v SavedsearchcompleteSearchResults)`

SetSearchResults sets SearchResults field to given value.


### GetSignedS3Url

`func (o *Savedsearchcomplete) GetSignedS3Url() string`

GetSignedS3Url returns the SignedS3Url field if non-nil, zero value otherwise.

### GetSignedS3UrlOk

`func (o *Savedsearchcomplete) GetSignedS3UrlOk() (*string, bool)`

GetSignedS3UrlOk returns a tuple with the SignedS3Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignedS3Url

`func (o *Savedsearchcomplete) SetSignedS3Url(v string)`

SetSignedS3Url sets SignedS3Url field to given value.



