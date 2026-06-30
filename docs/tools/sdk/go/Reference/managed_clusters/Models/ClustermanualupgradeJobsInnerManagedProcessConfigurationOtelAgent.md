---
id: v1-clustermanualupgrade-jobs-inner-managed-process-configuration-otel-agent
title: ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent
pagination_label: ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent
sidebar_label: ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent', 'V1ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent'] 
slug: /tools/sdk/go/managedclusters/models/clustermanualupgrade-jobs-inner-managed-process-configuration-otel-agent
tags: ['SDK', 'Software Development Kit', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent', 'V1ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent']
---

# ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **string** | Version of the 'otel_agent' process. | 
**Path** | **string** | Path to the 'otel_agent' process. | 
**Description** | **string** | A brief description of the 'otel_agent' process. | 
**RestartNeeded** | **bool** | Indicates whether the process needs to be restarted. | 

## Methods

### NewClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent

`func NewClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent(version string, path string, description string, restartNeeded bool, ) *ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent`

NewClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent instantiates a new ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgentWithDefaults

`func NewClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgentWithDefaults() *ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent`

NewClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgentWithDefaults instantiates a new ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVersion

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent) SetVersion(v string)`

SetVersion sets Version field to given value.


### GetPath

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent) SetPath(v string)`

SetPath sets Path field to given value.


### GetDescription

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetRestartNeeded

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent) GetRestartNeeded() bool`

GetRestartNeeded returns the RestartNeeded field if non-nil, zero value otherwise.

### GetRestartNeededOk

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent) GetRestartNeededOk() (*bool, bool)`

GetRestartNeededOk returns a tuple with the RestartNeeded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestartNeeded

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent) SetRestartNeeded(v bool)`

SetRestartNeeded sets RestartNeeded field to given value.



