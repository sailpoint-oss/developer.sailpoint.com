---
id: event-bridge-config
title: EventBridgeConfig
pagination_label: EventBridgeConfig
sidebar_label: EventBridgeConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'EventBridgeConfig', 'EventBridgeConfig'] 
slug: /tools/sdk/go//models/event-bridge-config
tags: ['SDK', 'Software Development Kit', 'EventBridgeConfig', 'EventBridgeConfig']
---

# EventBridgeConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AwsAccount** | **string** | AWS Account Number (12-digit number) that has the EventBridge Partner Event Source Resource. | 
**AwsRegion** | **string** | AWS Region that has the EventBridge Partner Event Source Resource. See https://docs.aws.amazon.com/general/latest/gr/rande.html for a full list of available values. | 

## Methods

### NewEventBridgeConfig

`func NewEventBridgeConfig(awsAccount string, awsRegion string, ) *EventBridgeConfig`

NewEventBridgeConfig instantiates a new EventBridgeConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventBridgeConfigWithDefaults

`func NewEventBridgeConfigWithDefaults() *EventBridgeConfig`

NewEventBridgeConfigWithDefaults instantiates a new EventBridgeConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAwsAccount

`func (o *EventBridgeConfig) GetAwsAccount() string`

GetAwsAccount returns the AwsAccount field if non-nil, zero value otherwise.

### GetAwsAccountOk

`func (o *EventBridgeConfig) GetAwsAccountOk() (*string, bool)`

GetAwsAccountOk returns a tuple with the AwsAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwsAccount

`func (o *EventBridgeConfig) SetAwsAccount(v string)`

SetAwsAccount sets AwsAccount field to given value.


### GetAwsRegion

`func (o *EventBridgeConfig) GetAwsRegion() string`

GetAwsRegion returns the AwsRegion field if non-nil, zero value otherwise.

### GetAwsRegionOk

`func (o *EventBridgeConfig) GetAwsRegionOk() (*string, bool)`

GetAwsRegionOk returns a tuple with the AwsRegion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwsRegion

`func (o *EventBridgeConfig) SetAwsRegion(v string)`

SetAwsRegion sets AwsRegion field to given value.



