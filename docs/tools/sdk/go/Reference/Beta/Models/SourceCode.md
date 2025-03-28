---
id: beta-source-code
title: SourceCode
pagination_label: SourceCode
sidebar_label: SourceCode
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceCode', 'BetaSourceCode'] 
slug: /tools/sdk/go/beta/models/source-code
tags: ['SDK', 'Software Development Kit', 'SourceCode', 'BetaSourceCode']
---

# SourceCode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **string** | the version of the code | 
**Script** | **string** | The code | 

## Methods

### NewSourceCode

`func NewSourceCode(version string, script string, ) *SourceCode`

NewSourceCode instantiates a new SourceCode object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceCodeWithDefaults

`func NewSourceCodeWithDefaults() *SourceCode`

NewSourceCodeWithDefaults instantiates a new SourceCode object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVersion

`func (o *SourceCode) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *SourceCode) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *SourceCode) SetVersion(v string)`

SetVersion sets Version field to given value.


### GetScript

`func (o *SourceCode) GetScript() string`

GetScript returns the Script field if non-nil, zero value otherwise.

### GetScriptOk

`func (o *SourceCode) GetScriptOk() (*string, bool)`

GetScriptOk returns a tuple with the Script field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScript

`func (o *SourceCode) SetScript(v string)`

SetScript sets Script field to given value.



