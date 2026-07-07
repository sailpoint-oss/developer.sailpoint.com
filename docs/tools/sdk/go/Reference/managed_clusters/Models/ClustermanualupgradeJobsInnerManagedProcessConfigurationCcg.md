---
id: v1-clustermanualupgrade-jobs-inner-managed-process-configuration-ccg
title: ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg
pagination_label: ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg
sidebar_label: ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg', 'V1ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg'] 
slug: /tools/sdk/go/managedclusters/models/clustermanualupgrade-jobs-inner-managed-process-configuration-ccg
tags: ['SDK', 'Software Development Kit', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg', 'V1ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg']
---

# ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **string** | Version of the 'ccg' process. | 
**Path** | **string** | Path to the 'ccg' process. | 
**Description** | **string** | A brief description of the 'ccg' process. | 
**RestartNeeded** | **bool** | Indicates whether the process needs to be restarted. | 
**Dependencies** | **map[string]string** | A map of dependencies for the 'ccg' process. | 

## Methods

### NewClustermanualupgradeJobsInnerManagedProcessConfigurationCcg

`func NewClustermanualupgradeJobsInnerManagedProcessConfigurationCcg(version string, path string, description string, restartNeeded bool, dependencies map[string]string, ) *ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg`

NewClustermanualupgradeJobsInnerManagedProcessConfigurationCcg instantiates a new ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewClustermanualupgradeJobsInnerManagedProcessConfigurationCcgWithDefaults

`func NewClustermanualupgradeJobsInnerManagedProcessConfigurationCcgWithDefaults() *ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg`

NewClustermanualupgradeJobsInnerManagedProcessConfigurationCcgWithDefaults instantiates a new ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVersion

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg) SetVersion(v string)`

SetVersion sets Version field to given value.


### GetPath

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg) SetPath(v string)`

SetPath sets Path field to given value.


### GetDescription

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetRestartNeeded

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg) GetRestartNeeded() bool`

GetRestartNeeded returns the RestartNeeded field if non-nil, zero value otherwise.

### GetRestartNeededOk

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg) GetRestartNeededOk() (*bool, bool)`

GetRestartNeededOk returns a tuple with the RestartNeeded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestartNeeded

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg) SetRestartNeeded(v bool)`

SetRestartNeeded sets RestartNeeded field to given value.


### GetDependencies

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg) GetDependencies() map[string]string`

GetDependencies returns the Dependencies field if non-nil, zero value otherwise.

### GetDependenciesOk

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg) GetDependenciesOk() (*map[string]string, bool)`

GetDependenciesOk returns a tuple with the Dependencies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDependencies

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg) SetDependencies(v map[string]string)`

SetDependencies sets Dependencies field to given value.



