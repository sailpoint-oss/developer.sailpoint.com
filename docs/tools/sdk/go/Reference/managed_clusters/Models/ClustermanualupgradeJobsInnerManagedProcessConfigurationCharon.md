---
id: v1-clustermanualupgrade-jobs-inner-managed-process-configuration-charon
title: ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon
pagination_label: ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon
sidebar_label: ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon', 'V1ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon'] 
slug: /tools/sdk/go/managedclusters/models/clustermanualupgrade-jobs-inner-managed-process-configuration-charon
tags: ['SDK', 'Software Development Kit', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon', 'V1ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon']
---

# ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **string** | Version of the 'charon' process. | 
**Path** | **string** | Path to the 'charon' process. | 
**Description** | **string** | A brief description of the 'charon' process. | 
**RestartNeeded** | **bool** | Indicates whether the process needs to be restarted. | 

## Methods

### NewClustermanualupgradeJobsInnerManagedProcessConfigurationCharon

`func NewClustermanualupgradeJobsInnerManagedProcessConfigurationCharon(version string, path string, description string, restartNeeded bool, ) *ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon`

NewClustermanualupgradeJobsInnerManagedProcessConfigurationCharon instantiates a new ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewClustermanualupgradeJobsInnerManagedProcessConfigurationCharonWithDefaults

`func NewClustermanualupgradeJobsInnerManagedProcessConfigurationCharonWithDefaults() *ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon`

NewClustermanualupgradeJobsInnerManagedProcessConfigurationCharonWithDefaults instantiates a new ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVersion

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon) SetVersion(v string)`

SetVersion sets Version field to given value.


### GetPath

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon) SetPath(v string)`

SetPath sets Path field to given value.


### GetDescription

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetRestartNeeded

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon) GetRestartNeeded() bool`

GetRestartNeeded returns the RestartNeeded field if non-nil, zero value otherwise.

### GetRestartNeededOk

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon) GetRestartNeededOk() (*bool, bool)`

GetRestartNeededOk returns a tuple with the RestartNeeded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestartNeeded

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon) SetRestartNeeded(v bool)`

SetRestartNeeded sets RestartNeeded field to given value.



