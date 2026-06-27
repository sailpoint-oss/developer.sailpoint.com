---
id: v1-authprofilesummary
title: Authprofilesummary
pagination_label: Authprofilesummary
sidebar_label: Authprofilesummary
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Authprofilesummary', 'V1Authprofilesummary'] 
slug: /tools/sdk/go/authprofile/models/authprofilesummary
tags: ['SDK', 'Software Development Kit', 'Authprofilesummary', 'V1Authprofilesummary']
---

# Authprofilesummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Tenant** | Pointer to **string** | Tenant name. | [optional] 
**Id** | Pointer to **string** | Identity ID. | [optional] 

## Methods

### NewAuthprofilesummary

`func NewAuthprofilesummary() *Authprofilesummary`

NewAuthprofilesummary instantiates a new Authprofilesummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthprofilesummaryWithDefaults

`func NewAuthprofilesummaryWithDefaults() *Authprofilesummary`

NewAuthprofilesummaryWithDefaults instantiates a new Authprofilesummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTenant

`func (o *Authprofilesummary) GetTenant() string`

GetTenant returns the Tenant field if non-nil, zero value otherwise.

### GetTenantOk

`func (o *Authprofilesummary) GetTenantOk() (*string, bool)`

GetTenantOk returns a tuple with the Tenant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenant

`func (o *Authprofilesummary) SetTenant(v string)`

SetTenant sets Tenant field to given value.

### HasTenant

`func (o *Authprofilesummary) HasTenant() bool`

HasTenant returns a boolean if a field has been set.

### GetId

`func (o *Authprofilesummary) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Authprofilesummary) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Authprofilesummary) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Authprofilesummary) HasId() bool`

HasId returns a boolean if a field has been set.


