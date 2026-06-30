---
id: v1-objectexportimportoptions
title: Objectexportimportoptions
pagination_label: Objectexportimportoptions
sidebar_label: Objectexportimportoptions
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Objectexportimportoptions', 'V1Objectexportimportoptions'] 
slug: /tools/sdk/go/spconfig/models/objectexportimportoptions
tags: ['SDK', 'Software Development Kit', 'Objectexportimportoptions', 'V1Objectexportimportoptions']
---

# Objectexportimportoptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IncludedIds** | Pointer to **[]string** | Object ids to be included in an import or export. | [optional] 
**IncludedNames** | Pointer to **[]string** | Object names to be included in an import or export. | [optional] 

## Methods

### NewObjectexportimportoptions

`func NewObjectexportimportoptions() *Objectexportimportoptions`

NewObjectexportimportoptions instantiates a new Objectexportimportoptions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewObjectexportimportoptionsWithDefaults

`func NewObjectexportimportoptionsWithDefaults() *Objectexportimportoptions`

NewObjectexportimportoptionsWithDefaults instantiates a new Objectexportimportoptions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIncludedIds

`func (o *Objectexportimportoptions) GetIncludedIds() []string`

GetIncludedIds returns the IncludedIds field if non-nil, zero value otherwise.

### GetIncludedIdsOk

`func (o *Objectexportimportoptions) GetIncludedIdsOk() (*[]string, bool)`

GetIncludedIdsOk returns a tuple with the IncludedIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludedIds

`func (o *Objectexportimportoptions) SetIncludedIds(v []string)`

SetIncludedIds sets IncludedIds field to given value.

### HasIncludedIds

`func (o *Objectexportimportoptions) HasIncludedIds() bool`

HasIncludedIds returns a boolean if a field has been set.

### GetIncludedNames

`func (o *Objectexportimportoptions) GetIncludedNames() []string`

GetIncludedNames returns the IncludedNames field if non-nil, zero value otherwise.

### GetIncludedNamesOk

`func (o *Objectexportimportoptions) GetIncludedNamesOk() (*[]string, bool)`

GetIncludedNamesOk returns a tuple with the IncludedNames field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludedNames

`func (o *Objectexportimportoptions) SetIncludedNames(v []string)`

SetIncludedNames sets IncludedNames field to given value.

### HasIncludedNames

`func (o *Objectexportimportoptions) HasIncludedNames() bool`

HasIncludedNames returns a boolean if a field has been set.


