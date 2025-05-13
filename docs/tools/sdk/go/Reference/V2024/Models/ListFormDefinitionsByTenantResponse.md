---
id: v2024-list-form-definitions-by-tenant-response
title: ListFormDefinitionsByTenantResponse
pagination_label: ListFormDefinitionsByTenantResponse
sidebar_label: ListFormDefinitionsByTenantResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListFormDefinitionsByTenantResponse', 'V2024ListFormDefinitionsByTenantResponse'] 
slug: /tools/sdk/go/v2024/models/list-form-definitions-by-tenant-response
tags: ['SDK', 'Software Development Kit', 'ListFormDefinitionsByTenantResponse', 'V2024ListFormDefinitionsByTenantResponse']
---

# ListFormDefinitionsByTenantResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int64** | Count number of results. | [optional] 
**Results** | Pointer to [**[]FormDefinitionResponse**](form-definition-response) | List of FormDefinitionResponse items. | [optional] 

## Methods

### NewListFormDefinitionsByTenantResponse

`func NewListFormDefinitionsByTenantResponse() *ListFormDefinitionsByTenantResponse`

NewListFormDefinitionsByTenantResponse instantiates a new ListFormDefinitionsByTenantResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListFormDefinitionsByTenantResponseWithDefaults

`func NewListFormDefinitionsByTenantResponseWithDefaults() *ListFormDefinitionsByTenantResponse`

NewListFormDefinitionsByTenantResponseWithDefaults instantiates a new ListFormDefinitionsByTenantResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *ListFormDefinitionsByTenantResponse) GetCount() int64`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *ListFormDefinitionsByTenantResponse) GetCountOk() (*int64, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *ListFormDefinitionsByTenantResponse) SetCount(v int64)`

SetCount sets Count field to given value.

### HasCount

`func (o *ListFormDefinitionsByTenantResponse) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetResults

`func (o *ListFormDefinitionsByTenantResponse) GetResults() []FormDefinitionResponse`

GetResults returns the Results field if non-nil, zero value otherwise.

### GetResultsOk

`func (o *ListFormDefinitionsByTenantResponse) GetResultsOk() (*[]FormDefinitionResponse, bool)`

GetResultsOk returns a tuple with the Results field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResults

`func (o *ListFormDefinitionsByTenantResponse) SetResults(v []FormDefinitionResponse)`

SetResults sets Results field to given value.

### HasResults

`func (o *ListFormDefinitionsByTenantResponse) HasResults() bool`

HasResults returns a boolean if a field has been set.


