---
id: beta-search-form-definitions-by-tenant400-response
title: SearchFormDefinitionsByTenant400Response
pagination_label: SearchFormDefinitionsByTenant400Response
sidebar_label: SearchFormDefinitionsByTenant400Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SearchFormDefinitionsByTenant400Response', 'BetaSearchFormDefinitionsByTenant400Response'] 
slug: /tools/sdk/go/beta/models/search-form-definitions-by-tenant400-response
tags: ['SDK', 'Software Development Kit', 'SearchFormDefinitionsByTenant400Response', 'BetaSearchFormDefinitionsByTenant400Response']
---

# SearchFormDefinitionsByTenant400Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailCode** | Pointer to **string** |  | [optional] 
**Messages** | Pointer to [**[]ErrorMessage**](error-message) |  | [optional] 
**StatusCode** | Pointer to **int64** |  | [optional] 
**TrackingId** | Pointer to **string** |  | [optional] 

## Methods

### NewSearchFormDefinitionsByTenant400Response

`func NewSearchFormDefinitionsByTenant400Response() *SearchFormDefinitionsByTenant400Response`

NewSearchFormDefinitionsByTenant400Response instantiates a new SearchFormDefinitionsByTenant400Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchFormDefinitionsByTenant400ResponseWithDefaults

`func NewSearchFormDefinitionsByTenant400ResponseWithDefaults() *SearchFormDefinitionsByTenant400Response`

NewSearchFormDefinitionsByTenant400ResponseWithDefaults instantiates a new SearchFormDefinitionsByTenant400Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDetailCode

`func (o *SearchFormDefinitionsByTenant400Response) GetDetailCode() string`

GetDetailCode returns the DetailCode field if non-nil, zero value otherwise.

### GetDetailCodeOk

`func (o *SearchFormDefinitionsByTenant400Response) GetDetailCodeOk() (*string, bool)`

GetDetailCodeOk returns a tuple with the DetailCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetailCode

`func (o *SearchFormDefinitionsByTenant400Response) SetDetailCode(v string)`

SetDetailCode sets DetailCode field to given value.

### HasDetailCode

`func (o *SearchFormDefinitionsByTenant400Response) HasDetailCode() bool`

HasDetailCode returns a boolean if a field has been set.

### GetMessages

`func (o *SearchFormDefinitionsByTenant400Response) GetMessages() []ErrorMessage`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *SearchFormDefinitionsByTenant400Response) GetMessagesOk() (*[]ErrorMessage, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *SearchFormDefinitionsByTenant400Response) SetMessages(v []ErrorMessage)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *SearchFormDefinitionsByTenant400Response) HasMessages() bool`

HasMessages returns a boolean if a field has been set.

### GetStatusCode

`func (o *SearchFormDefinitionsByTenant400Response) GetStatusCode() int64`

GetStatusCode returns the StatusCode field if non-nil, zero value otherwise.

### GetStatusCodeOk

`func (o *SearchFormDefinitionsByTenant400Response) GetStatusCodeOk() (*int64, bool)`

GetStatusCodeOk returns a tuple with the StatusCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusCode

`func (o *SearchFormDefinitionsByTenant400Response) SetStatusCode(v int64)`

SetStatusCode sets StatusCode field to given value.

### HasStatusCode

`func (o *SearchFormDefinitionsByTenant400Response) HasStatusCode() bool`

HasStatusCode returns a boolean if a field has been set.

### GetTrackingId

`func (o *SearchFormDefinitionsByTenant400Response) GetTrackingId() string`

GetTrackingId returns the TrackingId field if non-nil, zero value otherwise.

### GetTrackingIdOk

`func (o *SearchFormDefinitionsByTenant400Response) GetTrackingIdOk() (*string, bool)`

GetTrackingIdOk returns a tuple with the TrackingId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackingId

`func (o *SearchFormDefinitionsByTenant400Response) SetTrackingId(v string)`

SetTrackingId sets TrackingId field to given value.

### HasTrackingId

`func (o *SearchFormDefinitionsByTenant400Response) HasTrackingId() bool`

HasTrackingId returns a boolean if a field has been set.


