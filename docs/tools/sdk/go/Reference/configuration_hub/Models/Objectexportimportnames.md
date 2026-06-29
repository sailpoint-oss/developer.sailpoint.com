---
id: v1-objectexportimportnames
title: Objectexportimportnames
pagination_label: Objectexportimportnames
sidebar_label: Objectexportimportnames
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Objectexportimportnames', 'V1Objectexportimportnames'] 
slug: /tools/sdk/go/configurationhub/models/objectexportimportnames
tags: ['SDK', 'Software Development Kit', 'Objectexportimportnames', 'V1Objectexportimportnames']
---

# Objectexportimportnames

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IncludedNames** | Pointer to **[]string** | Object names to be included in a backup. | [optional] 

## Methods

### NewObjectexportimportnames

`func NewObjectexportimportnames() *Objectexportimportnames`

NewObjectexportimportnames instantiates a new Objectexportimportnames object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewObjectexportimportnamesWithDefaults

`func NewObjectexportimportnamesWithDefaults() *Objectexportimportnames`

NewObjectexportimportnamesWithDefaults instantiates a new Objectexportimportnames object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIncludedNames

`func (o *Objectexportimportnames) GetIncludedNames() []string`

GetIncludedNames returns the IncludedNames field if non-nil, zero value otherwise.

### GetIncludedNamesOk

`func (o *Objectexportimportnames) GetIncludedNamesOk() (*[]string, bool)`

GetIncludedNamesOk returns a tuple with the IncludedNames field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludedNames

`func (o *Objectexportimportnames) SetIncludedNames(v []string)`

SetIncludedNames sets IncludedNames field to given value.

### HasIncludedNames

`func (o *Objectexportimportnames) HasIncludedNames() bool`

HasIncludedNames returns a boolean if a field has been set.


