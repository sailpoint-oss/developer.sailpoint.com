---
id: v1-eventbridgeconfig
title: Eventbridgeconfig
pagination_label: Eventbridgeconfig
sidebar_label: Eventbridgeconfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Eventbridgeconfig', 'V1Eventbridgeconfig'] 
slug: /tools/sdk/go/triggers/models/eventbridgeconfig
tags: ['SDK', 'Software Development Kit', 'Eventbridgeconfig', 'V1Eventbridgeconfig']
---

# Eventbridgeconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AwsAccount** | **string** | AWS Account Number (12-digit number) that has the EventBridge Partner Event Source Resource. | 
**AwsRegion** | **string** | AWS Region that has the EventBridge Partner Event Source Resource. See https://docs.aws.amazon.com/general/latest/gr/rande.html for a full list of available values. | 

## Methods

### NewEventbridgeconfig

`func NewEventbridgeconfig(awsAccount string, awsRegion string, ) *Eventbridgeconfig`

NewEventbridgeconfig instantiates a new Eventbridgeconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventbridgeconfigWithDefaults

`func NewEventbridgeconfigWithDefaults() *Eventbridgeconfig`

NewEventbridgeconfigWithDefaults instantiates a new Eventbridgeconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAwsAccount

`func (o *Eventbridgeconfig) GetAwsAccount() string`

GetAwsAccount returns the AwsAccount field if non-nil, zero value otherwise.

### GetAwsAccountOk

`func (o *Eventbridgeconfig) GetAwsAccountOk() (*string, bool)`

GetAwsAccountOk returns a tuple with the AwsAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwsAccount

`func (o *Eventbridgeconfig) SetAwsAccount(v string)`

SetAwsAccount sets AwsAccount field to given value.


### GetAwsRegion

`func (o *Eventbridgeconfig) GetAwsRegion() string`

GetAwsRegion returns the AwsRegion field if non-nil, zero value otherwise.

### GetAwsRegionOk

`func (o *Eventbridgeconfig) GetAwsRegionOk() (*string, bool)`

GetAwsRegionOk returns a tuple with the AwsRegion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwsRegion

`func (o *Eventbridgeconfig) SetAwsRegion(v string)`

SetAwsRegion sets AwsRegion field to given value.



