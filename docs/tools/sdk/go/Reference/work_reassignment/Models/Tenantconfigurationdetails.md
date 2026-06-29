---
id: v1-tenantconfigurationdetails
title: Tenantconfigurationdetails
pagination_label: Tenantconfigurationdetails
sidebar_label: Tenantconfigurationdetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Tenantconfigurationdetails', 'V1Tenantconfigurationdetails'] 
slug: /tools/sdk/go/workreassignment/models/tenantconfigurationdetails
tags: ['SDK', 'Software Development Kit', 'Tenantconfigurationdetails', 'V1Tenantconfigurationdetails']
---

# Tenantconfigurationdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Disabled** | Pointer to **NullableBool** | Flag to determine if Reassignment Configuration is enabled or disabled for a tenant.  When this flag is set to true, Reassignment Configuration is disabled. | [optional] [default to false]

## Methods

### NewTenantconfigurationdetails

`func NewTenantconfigurationdetails() *Tenantconfigurationdetails`

NewTenantconfigurationdetails instantiates a new Tenantconfigurationdetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTenantconfigurationdetailsWithDefaults

`func NewTenantconfigurationdetailsWithDefaults() *Tenantconfigurationdetails`

NewTenantconfigurationdetailsWithDefaults instantiates a new Tenantconfigurationdetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDisabled

`func (o *Tenantconfigurationdetails) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *Tenantconfigurationdetails) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *Tenantconfigurationdetails) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.

### HasDisabled

`func (o *Tenantconfigurationdetails) HasDisabled() bool`

HasDisabled returns a boolean if a field has been set.

### SetDisabledNil

`func (o *Tenantconfigurationdetails) SetDisabledNil(b bool)`

 SetDisabledNil sets the value for Disabled to be an explicit nil

### UnsetDisabled
`func (o *Tenantconfigurationdetails) UnsetDisabled()`

UnsetDisabled ensures that no value is present for Disabled, not even an explicit nil

