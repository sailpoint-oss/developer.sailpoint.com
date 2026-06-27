---
id: v1-clustermanualupgrade-jobs-inner-managed-process-configuration-relay
title: ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay
pagination_label: ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay
sidebar_label: ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay', 'V1ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay'] 
slug: /tools/sdk/go/managedclusters/models/clustermanualupgrade-jobs-inner-managed-process-configuration-relay
tags: ['SDK', 'Software Development Kit', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay', 'V1ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay']
---

# ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **string** | Version of the 'relay' process. | 
**Path** | **string** | Path to the 'relay' process. | 
**Description** | **string** | A brief description of the 'relay' process. | 
**RestartNeeded** | **bool** | Indicates whether the process needs to be restarted. | 

## Methods

### NewClustermanualupgradeJobsInnerManagedProcessConfigurationRelay

`func NewClustermanualupgradeJobsInnerManagedProcessConfigurationRelay(version string, path string, description string, restartNeeded bool, ) *ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay`

NewClustermanualupgradeJobsInnerManagedProcessConfigurationRelay instantiates a new ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewClustermanualupgradeJobsInnerManagedProcessConfigurationRelayWithDefaults

`func NewClustermanualupgradeJobsInnerManagedProcessConfigurationRelayWithDefaults() *ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay`

NewClustermanualupgradeJobsInnerManagedProcessConfigurationRelayWithDefaults instantiates a new ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVersion

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay) SetVersion(v string)`

SetVersion sets Version field to given value.


### GetPath

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay) SetPath(v string)`

SetPath sets Path field to given value.


### GetDescription

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetRestartNeeded

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay) GetRestartNeeded() bool`

GetRestartNeeded returns the RestartNeeded field if non-nil, zero value otherwise.

### GetRestartNeededOk

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay) GetRestartNeededOk() (*bool, bool)`

GetRestartNeededOk returns a tuple with the RestartNeeded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestartNeeded

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay) SetRestartNeeded(v bool)`

SetRestartNeeded sets RestartNeeded field to given value.



