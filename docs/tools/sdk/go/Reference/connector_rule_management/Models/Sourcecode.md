---
id: v1-sourcecode
title: Sourcecode
pagination_label: Sourcecode
sidebar_label: Sourcecode
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sourcecode', 'V1Sourcecode'] 
slug: /tools/sdk/go/connectorrulemanagement/models/sourcecode
tags: ['SDK', 'Software Development Kit', 'Sourcecode', 'V1Sourcecode']
---

# Sourcecode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **string** | the version of the code | 
**Script** | **string** | The code | 

## Methods

### NewSourcecode

`func NewSourcecode(version string, script string, ) *Sourcecode`

NewSourcecode instantiates a new Sourcecode object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourcecodeWithDefaults

`func NewSourcecodeWithDefaults() *Sourcecode`

NewSourcecodeWithDefaults instantiates a new Sourcecode object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVersion

`func (o *Sourcecode) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *Sourcecode) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *Sourcecode) SetVersion(v string)`

SetVersion sets Version field to given value.


### GetScript

`func (o *Sourcecode) GetScript() string`

GetScript returns the Script field if non-nil, zero value otherwise.

### GetScriptOk

`func (o *Sourcecode) GetScriptOk() (*string, bool)`

GetScriptOk returns a tuple with the Script field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScript

`func (o *Sourcecode) SetScript(v string)`

SetScript sets Script field to given value.



