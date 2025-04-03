---
id: v2025-cluster-manual-upgrade-jobs-inner-managed-process-configuration-charon
title: ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon
pagination_label: ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon
sidebar_label: ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon', 'V2025ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon'] 
slug: /tools/sdk/go/v2025/models/cluster-manual-upgrade-jobs-inner-managed-process-configuration-charon
tags: ['SDK', 'Software Development Kit', 'ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon', 'V2025ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon']
---

# ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **string** | Version of the 'charon' process. | 
**Path** | **string** | Path to the 'charon' process. | 
**Description** | **string** | A brief description of the 'charon' process. | 
**RestartNeeded** | **bool** | Indicates whether the process needs to be restarted. | 

## Methods

### NewClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon

`func NewClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon(version string, path string, description string, restartNeeded bool, ) *ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon`

NewClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon instantiates a new ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewClusterManualUpgradeJobsInnerManagedProcessConfigurationCharonWithDefaults

`func NewClusterManualUpgradeJobsInnerManagedProcessConfigurationCharonWithDefaults() *ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon`

NewClusterManualUpgradeJobsInnerManagedProcessConfigurationCharonWithDefaults instantiates a new ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVersion

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon) SetVersion(v string)`

SetVersion sets Version field to given value.


### GetPath

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon) SetPath(v string)`

SetPath sets Path field to given value.


### GetDescription

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetRestartNeeded

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon) GetRestartNeeded() bool`

GetRestartNeeded returns the RestartNeeded field if non-nil, zero value otherwise.

### GetRestartNeededOk

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon) GetRestartNeededOk() (*bool, bool)`

GetRestartNeededOk returns a tuple with the RestartNeeded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestartNeeded

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon) SetRestartNeeded(v bool)`

SetRestartNeeded sets RestartNeeded field to given value.



