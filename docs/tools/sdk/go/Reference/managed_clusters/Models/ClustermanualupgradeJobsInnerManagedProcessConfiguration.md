---
id: v1-clustermanualupgrade-jobs-inner-managed-process-configuration
title: ClustermanualupgradeJobsInnerManagedProcessConfiguration
pagination_label: ClustermanualupgradeJobsInnerManagedProcessConfiguration
sidebar_label: ClustermanualupgradeJobsInnerManagedProcessConfiguration
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ClustermanualupgradeJobsInnerManagedProcessConfiguration', 'V1ClustermanualupgradeJobsInnerManagedProcessConfiguration'] 
slug: /tools/sdk/go/managedclusters/models/clustermanualupgrade-jobs-inner-managed-process-configuration
tags: ['SDK', 'Software Development Kit', 'ClustermanualupgradeJobsInnerManagedProcessConfiguration', 'V1ClustermanualupgradeJobsInnerManagedProcessConfiguration']
---

# ClustermanualupgradeJobsInnerManagedProcessConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Charon** | Pointer to [**ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon**](clustermanualupgrade-jobs-inner-managed-process-configuration-charon) |  | [optional] 
**Ccg** | Pointer to [**ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg**](clustermanualupgrade-jobs-inner-managed-process-configuration-ccg) |  | [optional] 
**OtelAgent** | Pointer to [**ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent**](clustermanualupgrade-jobs-inner-managed-process-configuration-otel-agent) |  | [optional] 
**Relay** | Pointer to [**ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay**](clustermanualupgrade-jobs-inner-managed-process-configuration-relay) |  | [optional] 
**Toolbox** | Pointer to [**ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox**](clustermanualupgrade-jobs-inner-managed-process-configuration-toolbox) |  | [optional] 

## Methods

### NewClustermanualupgradeJobsInnerManagedProcessConfiguration

`func NewClustermanualupgradeJobsInnerManagedProcessConfiguration() *ClustermanualupgradeJobsInnerManagedProcessConfiguration`

NewClustermanualupgradeJobsInnerManagedProcessConfiguration instantiates a new ClustermanualupgradeJobsInnerManagedProcessConfiguration object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewClustermanualupgradeJobsInnerManagedProcessConfigurationWithDefaults

`func NewClustermanualupgradeJobsInnerManagedProcessConfigurationWithDefaults() *ClustermanualupgradeJobsInnerManagedProcessConfiguration`

NewClustermanualupgradeJobsInnerManagedProcessConfigurationWithDefaults instantiates a new ClustermanualupgradeJobsInnerManagedProcessConfiguration object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCharon

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfiguration) GetCharon() ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon`

GetCharon returns the Charon field if non-nil, zero value otherwise.

### GetCharonOk

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfiguration) GetCharonOk() (*ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon, bool)`

GetCharonOk returns a tuple with the Charon field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCharon

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfiguration) SetCharon(v ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon)`

SetCharon sets Charon field to given value.

### HasCharon

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfiguration) HasCharon() bool`

HasCharon returns a boolean if a field has been set.

### GetCcg

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfiguration) GetCcg() ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg`

GetCcg returns the Ccg field if non-nil, zero value otherwise.

### GetCcgOk

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfiguration) GetCcgOk() (*ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg, bool)`

GetCcgOk returns a tuple with the Ccg field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCcg

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfiguration) SetCcg(v ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg)`

SetCcg sets Ccg field to given value.

### HasCcg

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfiguration) HasCcg() bool`

HasCcg returns a boolean if a field has been set.

### GetOtelAgent

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfiguration) GetOtelAgent() ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent`

GetOtelAgent returns the OtelAgent field if non-nil, zero value otherwise.

### GetOtelAgentOk

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfiguration) GetOtelAgentOk() (*ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent, bool)`

GetOtelAgentOk returns a tuple with the OtelAgent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOtelAgent

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfiguration) SetOtelAgent(v ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent)`

SetOtelAgent sets OtelAgent field to given value.

### HasOtelAgent

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfiguration) HasOtelAgent() bool`

HasOtelAgent returns a boolean if a field has been set.

### GetRelay

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfiguration) GetRelay() ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay`

GetRelay returns the Relay field if non-nil, zero value otherwise.

### GetRelayOk

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfiguration) GetRelayOk() (*ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay, bool)`

GetRelayOk returns a tuple with the Relay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelay

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfiguration) SetRelay(v ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay)`

SetRelay sets Relay field to given value.

### HasRelay

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfiguration) HasRelay() bool`

HasRelay returns a boolean if a field has been set.

### GetToolbox

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfiguration) GetToolbox() ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox`

GetToolbox returns the Toolbox field if non-nil, zero value otherwise.

### GetToolboxOk

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfiguration) GetToolboxOk() (*ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox, bool)`

GetToolboxOk returns a tuple with the Toolbox field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToolbox

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfiguration) SetToolbox(v ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox)`

SetToolbox sets Toolbox field to given value.

### HasToolbox

`func (o *ClustermanualupgradeJobsInnerManagedProcessConfiguration) HasToolbox() bool`

HasToolbox returns a boolean if a field has been set.


