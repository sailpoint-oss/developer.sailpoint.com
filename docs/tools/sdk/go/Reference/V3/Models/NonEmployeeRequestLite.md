---
id: non-employee-request-lite
title: NonEmployeeRequestLite
pagination_label: NonEmployeeRequestLite
sidebar_label: NonEmployeeRequestLite
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'NonEmployeeRequestLite', 'NonEmployeeRequestLite'] 
slug: /tools/sdk/go/v3/models/non-employee-request-lite
tags: ['SDK', 'Software Development Kit', 'NonEmployeeRequestLite', 'NonEmployeeRequestLite']
---

# NonEmployeeRequestLite

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Non-Employee request id. | [optional] 
**Requester** | Pointer to [**NonEmployeeIdentityReferenceWithId**](non-employee-identity-reference-with-id) |  | [optional] 

## Methods

### NewNonEmployeeRequestLite

`func NewNonEmployeeRequestLite() *NonEmployeeRequestLite`

NewNonEmployeeRequestLite instantiates a new NonEmployeeRequestLite object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonEmployeeRequestLiteWithDefaults

`func NewNonEmployeeRequestLiteWithDefaults() *NonEmployeeRequestLite`

NewNonEmployeeRequestLiteWithDefaults instantiates a new NonEmployeeRequestLite object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *NonEmployeeRequestLite) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *NonEmployeeRequestLite) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *NonEmployeeRequestLite) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *NonEmployeeRequestLite) HasId() bool`

HasId returns a boolean if a field has been set.

### GetRequester

`func (o *NonEmployeeRequestLite) GetRequester() NonEmployeeIdentityReferenceWithId`

GetRequester returns the Requester field if non-nil, zero value otherwise.

### GetRequesterOk

`func (o *NonEmployeeRequestLite) GetRequesterOk() (*NonEmployeeIdentityReferenceWithId, bool)`

GetRequesterOk returns a tuple with the Requester field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequester

`func (o *NonEmployeeRequestLite) SetRequester(v NonEmployeeIdentityReferenceWithId)`

SetRequester sets Requester field to given value.

### HasRequester

`func (o *NonEmployeeRequestLite) HasRequester() bool`

HasRequester returns a boolean if a field has been set.


