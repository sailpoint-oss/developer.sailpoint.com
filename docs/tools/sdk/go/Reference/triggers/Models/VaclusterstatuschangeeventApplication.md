---
id: v1-vaclusterstatuschangeevent-application
title: VaclusterstatuschangeeventApplication
pagination_label: VaclusterstatuschangeeventApplication
sidebar_label: VaclusterstatuschangeeventApplication
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'VaclusterstatuschangeeventApplication', 'V1VaclusterstatuschangeeventApplication'] 
slug: /tools/sdk/go/triggers/models/vaclusterstatuschangeevent-application
tags: ['SDK', 'Software Development Kit', 'VaclusterstatuschangeeventApplication', 'V1VaclusterstatuschangeeventApplication']
---

# VaclusterstatuschangeeventApplication

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The GUID of the application | 
**Name** | **string** | The name of the application | 
**Attributes** | **map[string]interface{}** | Custom map of attributes for a source.  This will only be populated if type is `SOURCE` and the source has a proxy. | 

## Methods

### NewVaclusterstatuschangeeventApplication

`func NewVaclusterstatuschangeeventApplication(id string, name string, attributes map[string]interface{}, ) *VaclusterstatuschangeeventApplication`

NewVaclusterstatuschangeeventApplication instantiates a new VaclusterstatuschangeeventApplication object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVaclusterstatuschangeeventApplicationWithDefaults

`func NewVaclusterstatuschangeeventApplicationWithDefaults() *VaclusterstatuschangeeventApplication`

NewVaclusterstatuschangeeventApplicationWithDefaults instantiates a new VaclusterstatuschangeeventApplication object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *VaclusterstatuschangeeventApplication) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *VaclusterstatuschangeeventApplication) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *VaclusterstatuschangeeventApplication) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *VaclusterstatuschangeeventApplication) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *VaclusterstatuschangeeventApplication) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *VaclusterstatuschangeeventApplication) SetName(v string)`

SetName sets Name field to given value.


### GetAttributes

`func (o *VaclusterstatuschangeeventApplication) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *VaclusterstatuschangeeventApplication) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *VaclusterstatuschangeeventApplication) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.


### SetAttributesNil

`func (o *VaclusterstatuschangeeventApplication) SetAttributesNil(b bool)`

 SetAttributesNil sets the value for Attributes to be an explicit nil

### UnsetAttributes
`func (o *VaclusterstatuschangeeventApplication) UnsetAttributes()`

UnsetAttributes ensures that no value is present for Attributes, not even an explicit nil

