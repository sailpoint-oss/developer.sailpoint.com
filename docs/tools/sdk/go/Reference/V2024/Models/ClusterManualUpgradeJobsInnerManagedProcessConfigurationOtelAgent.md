---
id: v2024-cluster-manual-upgrade-jobs-inner-managed-process-configuration-otel-agent
title: ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent
pagination_label: ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent
sidebar_label: ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent', 'V2024ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent'] 
slug: /tools/sdk/go/v2024/models/cluster-manual-upgrade-jobs-inner-managed-process-configuration-otel-agent
tags: ['SDK', 'Software Development Kit', 'ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent', 'V2024ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent']
---

# ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **string** | Version of the &#39;otel_agent&#39; process. | 
**Path** | **string** | Path to the &#39;otel_agent&#39; process. | 
**Description** | **string** | A brief description of the &#39;otel_agent&#39; process. | 
**RestartNeeded** | **bool** | Indicates whether the process needs to be restarted. | 

## Methods

### NewClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent

`func NewClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent(version string, path string, description string, restartNeeded bool, ) *ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent`

NewClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent instantiates a new ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgentWithDefaults

`func NewClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgentWithDefaults() *ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent`

NewClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgentWithDefaults instantiates a new ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVersion

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent) SetVersion(v string)`

SetVersion sets Version field to given value.


### GetPath

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent) SetPath(v string)`

SetPath sets Path field to given value.


### GetDescription

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetRestartNeeded

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent) GetRestartNeeded() bool`

GetRestartNeeded returns the RestartNeeded field if non-nil, zero value otherwise.

### GetRestartNeededOk

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent) GetRestartNeededOk() (*bool, bool)`

GetRestartNeededOk returns a tuple with the RestartNeeded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestartNeeded

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent) SetRestartNeeded(v bool)`

SetRestartNeeded sets RestartNeeded field to given value.



