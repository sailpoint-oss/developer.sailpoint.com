---
id: v2024-tenant
title: Tenant
pagination_label: Tenant
sidebar_label: Tenant
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Tenant', 'V2024Tenant'] 
slug: /tools/sdk/go/v2024/models/tenant
tags: ['SDK', 'Software Development Kit', 'Tenant', 'V2024Tenant']
---

# Tenant

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The unique identifier for the Tenant | [optional] [readonly] 
**Name** | Pointer to **string** | Abbreviated name of the Tenant | [optional] 
**FullName** | Pointer to **string** | Human-readable name of the Tenant | [optional] 
**Pod** | Pointer to **string** | Deployment pod for the Tenant | [optional] 
**Region** | Pointer to **string** | Deployment region for the Tenant | [optional] 
**Description** | Pointer to **string** | Description of the Tenant | [optional] 
**Products** | Pointer to [**[]Product**](product) |  | [optional] 

## Methods

### NewTenant

`func NewTenant() *Tenant`

NewTenant instantiates a new Tenant object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTenantWithDefaults

`func NewTenantWithDefaults() *Tenant`

NewTenantWithDefaults instantiates a new Tenant object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Tenant) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Tenant) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Tenant) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Tenant) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Tenant) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Tenant) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Tenant) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Tenant) HasName() bool`

HasName returns a boolean if a field has been set.

### GetFullName

`func (o *Tenant) GetFullName() string`

GetFullName returns the FullName field if non-nil, zero value otherwise.

### GetFullNameOk

`func (o *Tenant) GetFullNameOk() (*string, bool)`

GetFullNameOk returns a tuple with the FullName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullName

`func (o *Tenant) SetFullName(v string)`

SetFullName sets FullName field to given value.

### HasFullName

`func (o *Tenant) HasFullName() bool`

HasFullName returns a boolean if a field has been set.

### GetPod

`func (o *Tenant) GetPod() string`

GetPod returns the Pod field if non-nil, zero value otherwise.

### GetPodOk

`func (o *Tenant) GetPodOk() (*string, bool)`

GetPodOk returns a tuple with the Pod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPod

`func (o *Tenant) SetPod(v string)`

SetPod sets Pod field to given value.

### HasPod

`func (o *Tenant) HasPod() bool`

HasPod returns a boolean if a field has been set.

### GetRegion

`func (o *Tenant) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *Tenant) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *Tenant) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *Tenant) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### GetDescription

`func (o *Tenant) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Tenant) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Tenant) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Tenant) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetProducts

`func (o *Tenant) GetProducts() []Product`

GetProducts returns the Products field if non-nil, zero value otherwise.

### GetProductsOk

`func (o *Tenant) GetProductsOk() (*[]Product, bool)`

GetProductsOk returns a tuple with the Products field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProducts

`func (o *Tenant) SetProducts(v []Product)`

SetProducts sets Products field to given value.

### HasProducts

`func (o *Tenant) HasProducts() bool`

HasProducts returns a boolean if a field has been set.


