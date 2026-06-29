---
id: v1-clustermanualupgrade-jobs-inner
title: ClustermanualupgradeJobsInner
pagination_label: ClustermanualupgradeJobsInner
sidebar_label: ClustermanualupgradeJobsInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ClustermanualupgradeJobsInner', 'V1ClustermanualupgradeJobsInner'] 
slug: /tools/sdk/go/managedclusters/models/clustermanualupgrade-jobs-inner
tags: ['SDK', 'Software Development Kit', 'ClustermanualupgradeJobsInner', 'V1ClustermanualupgradeJobsInner']
---

# ClustermanualupgradeJobsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** | Unique identifier for the upgrade job. | 
**Cookbook** | **string** | Identifier for the cookbook used in the upgrade job. | 
**State** | **string** | Current state of the upgrade job. | 
**Type** | **string** | The type of upgrade job (e.g., VA_UPGRADE). | 
**TargetId** | **string** | Unique identifier of the target for the upgrade job. | 
**ManagedProcessConfiguration** | [**ClustermanualupgradeJobsInnerManagedProcessConfiguration**](clustermanualupgrade-jobs-inner-managed-process-configuration) |  | 

## Methods

### NewClustermanualupgradeJobsInner

`func NewClustermanualupgradeJobsInner(uuid string, cookbook string, state string, type_ string, targetId string, managedProcessConfiguration ClustermanualupgradeJobsInnerManagedProcessConfiguration, ) *ClustermanualupgradeJobsInner`

NewClustermanualupgradeJobsInner instantiates a new ClustermanualupgradeJobsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewClustermanualupgradeJobsInnerWithDefaults

`func NewClustermanualupgradeJobsInnerWithDefaults() *ClustermanualupgradeJobsInner`

NewClustermanualupgradeJobsInnerWithDefaults instantiates a new ClustermanualupgradeJobsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *ClustermanualupgradeJobsInner) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *ClustermanualupgradeJobsInner) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *ClustermanualupgradeJobsInner) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetCookbook

`func (o *ClustermanualupgradeJobsInner) GetCookbook() string`

GetCookbook returns the Cookbook field if non-nil, zero value otherwise.

### GetCookbookOk

`func (o *ClustermanualupgradeJobsInner) GetCookbookOk() (*string, bool)`

GetCookbookOk returns a tuple with the Cookbook field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCookbook

`func (o *ClustermanualupgradeJobsInner) SetCookbook(v string)`

SetCookbook sets Cookbook field to given value.


### GetState

`func (o *ClustermanualupgradeJobsInner) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *ClustermanualupgradeJobsInner) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *ClustermanualupgradeJobsInner) SetState(v string)`

SetState sets State field to given value.


### GetType

`func (o *ClustermanualupgradeJobsInner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ClustermanualupgradeJobsInner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ClustermanualupgradeJobsInner) SetType(v string)`

SetType sets Type field to given value.


### GetTargetId

`func (o *ClustermanualupgradeJobsInner) GetTargetId() string`

GetTargetId returns the TargetId field if non-nil, zero value otherwise.

### GetTargetIdOk

`func (o *ClustermanualupgradeJobsInner) GetTargetIdOk() (*string, bool)`

GetTargetIdOk returns a tuple with the TargetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetId

`func (o *ClustermanualupgradeJobsInner) SetTargetId(v string)`

SetTargetId sets TargetId field to given value.


### GetManagedProcessConfiguration

`func (o *ClustermanualupgradeJobsInner) GetManagedProcessConfiguration() ClustermanualupgradeJobsInnerManagedProcessConfiguration`

GetManagedProcessConfiguration returns the ManagedProcessConfiguration field if non-nil, zero value otherwise.

### GetManagedProcessConfigurationOk

`func (o *ClustermanualupgradeJobsInner) GetManagedProcessConfigurationOk() (*ClustermanualupgradeJobsInnerManagedProcessConfiguration, bool)`

GetManagedProcessConfigurationOk returns a tuple with the ManagedProcessConfiguration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedProcessConfiguration

`func (o *ClustermanualupgradeJobsInner) SetManagedProcessConfiguration(v ClustermanualupgradeJobsInnerManagedProcessConfiguration)`

SetManagedProcessConfiguration sets ManagedProcessConfiguration field to given value.



