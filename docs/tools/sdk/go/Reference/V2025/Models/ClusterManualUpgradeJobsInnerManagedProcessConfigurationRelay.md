---
id: v2025-cluster-manual-upgrade-jobs-inner-managed-process-configuration-relay
title: ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay
pagination_label: ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay
sidebar_label: ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay', 'V2025ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay'] 
slug: /tools/sdk/go/v2025/models/cluster-manual-upgrade-jobs-inner-managed-process-configuration-relay
tags: ['SDK', 'Software Development Kit', 'ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay', 'V2025ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay']
---

# ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **string** | Version of the 'relay' process. | 
**Path** | **string** | Path to the 'relay' process. | 
**Description** | **string** | A brief description of the 'relay' process. | 
**RestartNeeded** | **bool** | Indicates whether the process needs to be restarted. | 

## Methods

### NewClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay

`func NewClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay(version string, path string, description string, restartNeeded bool, ) *ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay`

NewClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay instantiates a new ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewClusterManualUpgradeJobsInnerManagedProcessConfigurationRelayWithDefaults

`func NewClusterManualUpgradeJobsInnerManagedProcessConfigurationRelayWithDefaults() *ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay`

NewClusterManualUpgradeJobsInnerManagedProcessConfigurationRelayWithDefaults instantiates a new ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVersion

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay) SetVersion(v string)`

SetVersion sets Version field to given value.


### GetPath

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay) SetPath(v string)`

SetPath sets Path field to given value.


### GetDescription

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetRestartNeeded

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay) GetRestartNeeded() bool`

GetRestartNeeded returns the RestartNeeded field if non-nil, zero value otherwise.

### GetRestartNeededOk

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay) GetRestartNeededOk() (*bool, bool)`

GetRestartNeededOk returns a tuple with the RestartNeeded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestartNeeded

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay) SetRestartNeeded(v bool)`

SetRestartNeeded sets RestartNeeded field to given value.



