---
id: v1-clustermanualupgrade-jobs-inner-managed-process-configuration-toolbox
title: ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox
pagination_label: ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox
sidebar_label: ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox', 'V1ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox'] 
slug: /tools/sdk/go/managedclusters/models/clustermanualupgrade-jobs-inner-managed-process-configuration-toolbox
tags: ['SDK', 'Software Development Kit', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox', 'V1ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox']
---

# ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **string** | Version of the 'toolbox' process. | 
**Path** | **string** | Path to the 'toolbox' process. | 
**Description** | **string** | A brief description of the 'toolbox' process. | 
**RestartNeeded** | **bool** | Indicates whether the process needs to be restarted. | 

## Methods

### NewClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox

`func NewClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox(version string, path string, description string, restartNeeded bool, ) *ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox`

NewClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox instantiates a new ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewClustermanualupgradeJobsInnerManagedProcessConfigurationToolboxWithDefaults

`func NewClustermanualupgradeJobsInnerManagedProcessConfigurationToolboxWithDefaults() *ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox`

NewClustermanualupgradeJobsInnerManagedProcessConfigurationToolboxWithDefaults instantiates a new ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVersion

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox) SetVersion(v string)`

SetVersion sets Version field to given value.


### GetPath

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox) SetPath(v string)`

SetPath sets Path field to given value.


### GetDescription

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetRestartNeeded

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox) GetRestartNeeded() bool`

GetRestartNeeded returns the RestartNeeded field if non-nil, zero value otherwise.

### GetRestartNeededOk

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox) GetRestartNeededOk() (*bool, bool)`

GetRestartNeededOk returns a tuple with the RestartNeeded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestartNeeded

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox) SetRestartNeeded(v bool)`

SetRestartNeeded sets RestartNeeded field to given value.



