---
id: beta-multi-host-integrations-create-sources
title: MultiHostIntegrationsCreateSources
pagination_label: MultiHostIntegrationsCreateSources
sidebar_label: MultiHostIntegrationsCreateSources
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MultiHostIntegrationsCreateSources', 'BetaMultiHostIntegrationsCreateSources'] 
slug: /tools/sdk/go/beta/models/multi-host-integrations-create-sources
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsCreateSources', 'BetaMultiHostIntegrationsCreateSources']
---

# MultiHostIntegrationsCreateSources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Source&#39;s human-readable name. | 
**Description** | Pointer to **string** | Source&#39;s human-readable description. | [optional] 
**ConnectorAttributes** | Pointer to **map[string]interface{}** | Connector specific configuration. This configuration will differ from type to type. | [optional] 

## Methods

### NewMultiHostIntegrationsCreateSources

`func NewMultiHostIntegrationsCreateSources(name string, ) *MultiHostIntegrationsCreateSources`

NewMultiHostIntegrationsCreateSources instantiates a new MultiHostIntegrationsCreateSources object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMultiHostIntegrationsCreateSourcesWithDefaults

`func NewMultiHostIntegrationsCreateSourcesWithDefaults() *MultiHostIntegrationsCreateSources`

NewMultiHostIntegrationsCreateSourcesWithDefaults instantiates a new MultiHostIntegrationsCreateSources object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *MultiHostIntegrationsCreateSources) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MultiHostIntegrationsCreateSources) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MultiHostIntegrationsCreateSources) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *MultiHostIntegrationsCreateSources) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MultiHostIntegrationsCreateSources) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MultiHostIntegrationsCreateSources) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *MultiHostIntegrationsCreateSources) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetConnectorAttributes

`func (o *MultiHostIntegrationsCreateSources) GetConnectorAttributes() map[string]interface{}`

GetConnectorAttributes returns the ConnectorAttributes field if non-nil, zero value otherwise.

### GetConnectorAttributesOk

`func (o *MultiHostIntegrationsCreateSources) GetConnectorAttributesOk() (*map[string]interface{}, bool)`

GetConnectorAttributesOk returns a tuple with the ConnectorAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorAttributes

`func (o *MultiHostIntegrationsCreateSources) SetConnectorAttributes(v map[string]interface{})`

SetConnectorAttributes sets ConnectorAttributes field to given value.

### HasConnectorAttributes

`func (o *MultiHostIntegrationsCreateSources) HasConnectorAttributes() bool`

HasConnectorAttributes returns a boolean if a field has been set.


