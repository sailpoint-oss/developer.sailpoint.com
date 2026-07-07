---
id: v1-search-form-definitions-by-tenant-v1400-response
title: SearchFormDefinitionsByTenantV1400Response
pagination_label: SearchFormDefinitionsByTenantV1400Response
sidebar_label: SearchFormDefinitionsByTenantV1400Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SearchFormDefinitionsByTenantV1400Response', 'V1SearchFormDefinitionsByTenantV1400Response'] 
slug: /tools/sdk/go/customforms/models/search-form-definitions-by-tenant-v1400-response
tags: ['SDK', 'Software Development Kit', 'SearchFormDefinitionsByTenantV1400Response', 'V1SearchFormDefinitionsByTenantV1400Response']
---

# SearchFormDefinitionsByTenantV1400Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailCode** | Pointer to **string** |  | [optional] 
**Messages** | Pointer to [**[]Errormessage**](errormessage) |  | [optional] 
**StatusCode** | Pointer to **int64** |  | [optional] 
**TrackingId** | Pointer to **string** |  | [optional] 

## Methods

### NewSearchFormDefinitionsByTenantV1400Response

`func NewSearchFormDefinitionsByTenantV1400Response() *SearchFormDefinitionsByTenantV1400Response`

NewSearchFormDefinitionsByTenantV1400Response instantiates a new SearchFormDefinitionsByTenantV1400Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchFormDefinitionsByTenantV1400ResponseWithDefaults

`func NewSearchFormDefinitionsByTenantV1400ResponseWithDefaults() *SearchFormDefinitionsByTenantV1400Response`

NewSearchFormDefinitionsByTenantV1400ResponseWithDefaults instantiates a new SearchFormDefinitionsByTenantV1400Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDetailCode

`func (o *SearchFormDefinitionsByTenantV1400Response) GetDetailCode() string`

GetDetailCode returns the DetailCode field if non-nil, zero value otherwise.

### GetDetailCodeOk

`func (o *SearchFormDefinitionsByTenantV1400Response) GetDetailCodeOk() (*string, bool)`

GetDetailCodeOk returns a tuple with the DetailCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetailCode

`func (o *SearchFormDefinitionsByTenantV1400Response) SetDetailCode(v string)`

SetDetailCode sets DetailCode field to given value.

### HasDetailCode

`func (o *SearchFormDefinitionsByTenantV1400Response) HasDetailCode() bool`

HasDetailCode returns a boolean if a field has been set.

### GetMessages

`func (o *SearchFormDefinitionsByTenantV1400Response) GetMessages() []Errormessage`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *SearchFormDefinitionsByTenantV1400Response) GetMessagesOk() (*[]Errormessage, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *SearchFormDefinitionsByTenantV1400Response) SetMessages(v []Errormessage)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *SearchFormDefinitionsByTenantV1400Response) HasMessages() bool`

HasMessages returns a boolean if a field has been set.

### GetStatusCode

`func (o *SearchFormDefinitionsByTenantV1400Response) GetStatusCode() int64`

GetStatusCode returns the StatusCode field if non-nil, zero value otherwise.

### GetStatusCodeOk

`func (o *SearchFormDefinitionsByTenantV1400Response) GetStatusCodeOk() (*int64, bool)`

GetStatusCodeOk returns a tuple with the StatusCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusCode

`func (o *SearchFormDefinitionsByTenantV1400Response) SetStatusCode(v int64)`

SetStatusCode sets StatusCode field to given value.

### HasStatusCode

`func (o *SearchFormDefinitionsByTenantV1400Response) HasStatusCode() bool`

HasStatusCode returns a boolean if a field has been set.

### GetTrackingId

`func (o *SearchFormDefinitionsByTenantV1400Response) GetTrackingId() string`

GetTrackingId returns the TrackingId field if non-nil, zero value otherwise.

### GetTrackingIdOk

`func (o *SearchFormDefinitionsByTenantV1400Response) GetTrackingIdOk() (*string, bool)`

GetTrackingIdOk returns a tuple with the TrackingId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackingId

`func (o *SearchFormDefinitionsByTenantV1400Response) SetTrackingId(v string)`

SetTrackingId sets TrackingId field to given value.

### HasTrackingId

`func (o *SearchFormDefinitionsByTenantV1400Response) HasTrackingId() bool`

HasTrackingId returns a boolean if a field has been set.


