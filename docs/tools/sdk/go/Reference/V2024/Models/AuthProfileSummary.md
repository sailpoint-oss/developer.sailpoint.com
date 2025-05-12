---
id: v2024-auth-profile-summary
title: AuthProfileSummary
pagination_label: AuthProfileSummary
sidebar_label: AuthProfileSummary
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AuthProfileSummary', 'V2024AuthProfileSummary'] 
slug: /tools/sdk/go/v2024/models/auth-profile-summary
tags: ['SDK', 'Software Development Kit', 'AuthProfileSummary', 'V2024AuthProfileSummary']
---

# AuthProfileSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Tenant** | Pointer to **string** | Tenant name. | [optional] 
**Id** | Pointer to **string** | Identity ID. | [optional] 

## Methods

### NewAuthProfileSummary

`func NewAuthProfileSummary() *AuthProfileSummary`

NewAuthProfileSummary instantiates a new AuthProfileSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthProfileSummaryWithDefaults

`func NewAuthProfileSummaryWithDefaults() *AuthProfileSummary`

NewAuthProfileSummaryWithDefaults instantiates a new AuthProfileSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTenant

`func (o *AuthProfileSummary) GetTenant() string`

GetTenant returns the Tenant field if non-nil, zero value otherwise.

### GetTenantOk

`func (o *AuthProfileSummary) GetTenantOk() (*string, bool)`

GetTenantOk returns a tuple with the Tenant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenant

`func (o *AuthProfileSummary) SetTenant(v string)`

SetTenant sets Tenant field to given value.

### HasTenant

`func (o *AuthProfileSummary) HasTenant() bool`

HasTenant returns a boolean if a field has been set.

### GetId

`func (o *AuthProfileSummary) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AuthProfileSummary) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AuthProfileSummary) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AuthProfileSummary) HasId() bool`

HasId returns a boolean if a field has been set.


