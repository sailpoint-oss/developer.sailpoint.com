---
id: v2025-cluster-manual-upgrade-jobs-inner-managed-process-configuration
title: ClusterManualUpgradeJobsInnerManagedProcessConfiguration
pagination_label: ClusterManualUpgradeJobsInnerManagedProcessConfiguration
sidebar_label: ClusterManualUpgradeJobsInnerManagedProcessConfiguration
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ClusterManualUpgradeJobsInnerManagedProcessConfiguration', 'V2025ClusterManualUpgradeJobsInnerManagedProcessConfiguration'] 
slug: /tools/sdk/go/v2025/models/cluster-manual-upgrade-jobs-inner-managed-process-configuration
tags: ['SDK', 'Software Development Kit', 'ClusterManualUpgradeJobsInnerManagedProcessConfiguration', 'V2025ClusterManualUpgradeJobsInnerManagedProcessConfiguration']
---

# ClusterManualUpgradeJobsInnerManagedProcessConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Charon** | Pointer to [**ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon**](cluster-manual-upgrade-jobs-inner-managed-process-configuration-charon) |  | [optional] 
**Ccg** | Pointer to [**ClusterManualUpgradeJobsInnerManagedProcessConfigurationCcg**](cluster-manual-upgrade-jobs-inner-managed-process-configuration-ccg) |  | [optional] 
**OtelAgent** | Pointer to [**ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent**](cluster-manual-upgrade-jobs-inner-managed-process-configuration-otel-agent) |  | [optional] 
**Relay** | Pointer to [**ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay**](cluster-manual-upgrade-jobs-inner-managed-process-configuration-relay) |  | [optional] 
**Toolbox** | Pointer to [**ClusterManualUpgradeJobsInnerManagedProcessConfigurationToolbox**](cluster-manual-upgrade-jobs-inner-managed-process-configuration-toolbox) |  | [optional] 

## Methods

### NewClusterManualUpgradeJobsInnerManagedProcessConfiguration

`func NewClusterManualUpgradeJobsInnerManagedProcessConfiguration() *ClusterManualUpgradeJobsInnerManagedProcessConfiguration`

NewClusterManualUpgradeJobsInnerManagedProcessConfiguration instantiates a new ClusterManualUpgradeJobsInnerManagedProcessConfiguration object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewClusterManualUpgradeJobsInnerManagedProcessConfigurationWithDefaults

`func NewClusterManualUpgradeJobsInnerManagedProcessConfigurationWithDefaults() *ClusterManualUpgradeJobsInnerManagedProcessConfiguration`

NewClusterManualUpgradeJobsInnerManagedProcessConfigurationWithDefaults instantiates a new ClusterManualUpgradeJobsInnerManagedProcessConfiguration object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCharon

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfiguration) GetCharon() ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon`

GetCharon returns the Charon field if non-nil, zero value otherwise.

### GetCharonOk

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfiguration) GetCharonOk() (*ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon, bool)`

GetCharonOk returns a tuple with the Charon field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCharon

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfiguration) SetCharon(v ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon)`

SetCharon sets Charon field to given value.

### HasCharon

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfiguration) HasCharon() bool`

HasCharon returns a boolean if a field has been set.

### GetCcg

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfiguration) GetCcg() ClusterManualUpgradeJobsInnerManagedProcessConfigurationCcg`

GetCcg returns the Ccg field if non-nil, zero value otherwise.

### GetCcgOk

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfiguration) GetCcgOk() (*ClusterManualUpgradeJobsInnerManagedProcessConfigurationCcg, bool)`

GetCcgOk returns a tuple with the Ccg field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCcg

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfiguration) SetCcg(v ClusterManualUpgradeJobsInnerManagedProcessConfigurationCcg)`

SetCcg sets Ccg field to given value.

### HasCcg

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfiguration) HasCcg() bool`

HasCcg returns a boolean if a field has been set.

### GetOtelAgent

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfiguration) GetOtelAgent() ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent`

GetOtelAgent returns the OtelAgent field if non-nil, zero value otherwise.

### GetOtelAgentOk

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfiguration) GetOtelAgentOk() (*ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent, bool)`

GetOtelAgentOk returns a tuple with the OtelAgent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOtelAgent

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfiguration) SetOtelAgent(v ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent)`

SetOtelAgent sets OtelAgent field to given value.

### HasOtelAgent

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfiguration) HasOtelAgent() bool`

HasOtelAgent returns a boolean if a field has been set.

### GetRelay

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfiguration) GetRelay() ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay`

GetRelay returns the Relay field if non-nil, zero value otherwise.

### GetRelayOk

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfiguration) GetRelayOk() (*ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay, bool)`

GetRelayOk returns a tuple with the Relay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelay

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfiguration) SetRelay(v ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay)`

SetRelay sets Relay field to given value.

### HasRelay

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfiguration) HasRelay() bool`

HasRelay returns a boolean if a field has been set.

### GetToolbox

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfiguration) GetToolbox() ClusterManualUpgradeJobsInnerManagedProcessConfigurationToolbox`

GetToolbox returns the Toolbox field if non-nil, zero value otherwise.

### GetToolboxOk

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfiguration) GetToolboxOk() (*ClusterManualUpgradeJobsInnerManagedProcessConfigurationToolbox, bool)`

GetToolboxOk returns a tuple with the Toolbox field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToolbox

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfiguration) SetToolbox(v ClusterManualUpgradeJobsInnerManagedProcessConfigurationToolbox)`

SetToolbox sets Toolbox field to given value.

### HasToolbox

`func (o *ClusterManualUpgradeJobsInnerManagedProcessConfiguration) HasToolbox() bool`

HasToolbox returns a boolean if a field has been set.


