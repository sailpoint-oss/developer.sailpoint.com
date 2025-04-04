---
id: v2025-cluster-manual-upgrade-jobs-inner
title: ClusterManualUpgradeJobsInner
pagination_label: ClusterManualUpgradeJobsInner
sidebar_label: ClusterManualUpgradeJobsInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ClusterManualUpgradeJobsInner', 'V2025ClusterManualUpgradeJobsInner'] 
slug: /tools/sdk/go/v2025/models/cluster-manual-upgrade-jobs-inner
tags: ['SDK', 'Software Development Kit', 'ClusterManualUpgradeJobsInner', 'V2025ClusterManualUpgradeJobsInner']
---

# ClusterManualUpgradeJobsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** | Unique identifier for the upgrade job. | 
**Cookbook** | **string** | Identifier for the cookbook used in the upgrade job. | 
**State** | **string** | Current state of the upgrade job. | 
**Type** | **string** | The type of upgrade job (e.g., VA_UPGRADE). | 
**TargetId** | **string** | Unique identifier of the target for the upgrade job. | 
**ManagedProcessConfiguration** | [**ClusterManualUpgradeJobsInnerManagedProcessConfiguration**](cluster-manual-upgrade-jobs-inner-managed-process-configuration) |  | 

## Methods

### NewClusterManualUpgradeJobsInner

`func NewClusterManualUpgradeJobsInner(uuid string, cookbook string, state string, type_ string, targetId string, managedProcessConfiguration ClusterManualUpgradeJobsInnerManagedProcessConfiguration, ) *ClusterManualUpgradeJobsInner`

NewClusterManualUpgradeJobsInner instantiates a new ClusterManualUpgradeJobsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewClusterManualUpgradeJobsInnerWithDefaults

`func NewClusterManualUpgradeJobsInnerWithDefaults() *ClusterManualUpgradeJobsInner`

NewClusterManualUpgradeJobsInnerWithDefaults instantiates a new ClusterManualUpgradeJobsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *ClusterManualUpgradeJobsInner) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *ClusterManualUpgradeJobsInner) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *ClusterManualUpgradeJobsInner) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetCookbook

`func (o *ClusterManualUpgradeJobsInner) GetCookbook() string`

GetCookbook returns the Cookbook field if non-nil, zero value otherwise.

### GetCookbookOk

`func (o *ClusterManualUpgradeJobsInner) GetCookbookOk() (*string, bool)`

GetCookbookOk returns a tuple with the Cookbook field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCookbook

`func (o *ClusterManualUpgradeJobsInner) SetCookbook(v string)`

SetCookbook sets Cookbook field to given value.


### GetState

`func (o *ClusterManualUpgradeJobsInner) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *ClusterManualUpgradeJobsInner) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *ClusterManualUpgradeJobsInner) SetState(v string)`

SetState sets State field to given value.


### GetType

`func (o *ClusterManualUpgradeJobsInner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ClusterManualUpgradeJobsInner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ClusterManualUpgradeJobsInner) SetType(v string)`

SetType sets Type field to given value.


### GetTargetId

`func (o *ClusterManualUpgradeJobsInner) GetTargetId() string`

GetTargetId returns the TargetId field if non-nil, zero value otherwise.

### GetTargetIdOk

`func (o *ClusterManualUpgradeJobsInner) GetTargetIdOk() (*string, bool)`

GetTargetIdOk returns a tuple with the TargetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetId

`func (o *ClusterManualUpgradeJobsInner) SetTargetId(v string)`

SetTargetId sets TargetId field to given value.


### GetManagedProcessConfiguration

`func (o *ClusterManualUpgradeJobsInner) GetManagedProcessConfiguration() ClusterManualUpgradeJobsInnerManagedProcessConfiguration`

GetManagedProcessConfiguration returns the ManagedProcessConfiguration field if non-nil, zero value otherwise.

### GetManagedProcessConfigurationOk

`func (o *ClusterManualUpgradeJobsInner) GetManagedProcessConfigurationOk() (*ClusterManualUpgradeJobsInnerManagedProcessConfiguration, bool)`

GetManagedProcessConfigurationOk returns a tuple with the ManagedProcessConfiguration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedProcessConfiguration

`func (o *ClusterManualUpgradeJobsInner) SetManagedProcessConfiguration(v ClusterManualUpgradeJobsInnerManagedProcessConfiguration)`

SetManagedProcessConfiguration sets ManagedProcessConfiguration field to given value.



