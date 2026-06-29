---
id: v1-servicedeskintegrationtemplatedto
title: Servicedeskintegrationtemplatedto
pagination_label: Servicedeskintegrationtemplatedto
sidebar_label: Servicedeskintegrationtemplatedto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Servicedeskintegrationtemplatedto', 'V1Servicedeskintegrationtemplatedto'] 
slug: /tools/sdk/go/servicedeskintegration/models/servicedeskintegrationtemplatedto
tags: ['SDK', 'Software Development Kit', 'Servicedeskintegrationtemplatedto', 'V1Servicedeskintegrationtemplatedto']
---

# Servicedeskintegrationtemplatedto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **NullableString** | Name of the Object | 
**Created** | Pointer to **SailPointTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Last modification date of the Object | [optional] [readonly] 
**Type** | **string** | The 'type' property specifies the type of the Service Desk integration template. | [default to "Web Service SDIM"]
**Attributes** | **map[string]interface{}** | The 'attributes' property value is a map of attributes available for integrations using this Service Desk integration template. | 
**ProvisioningConfig** | [**Provisioningconfig**](provisioningconfig) |  | 

## Methods

### NewServicedeskintegrationtemplatedto

`func NewServicedeskintegrationtemplatedto(name NullableString, type_ string, attributes map[string]interface{}, provisioningConfig Provisioningconfig, ) *Servicedeskintegrationtemplatedto`

NewServicedeskintegrationtemplatedto instantiates a new Servicedeskintegrationtemplatedto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServicedeskintegrationtemplatedtoWithDefaults

`func NewServicedeskintegrationtemplatedtoWithDefaults() *Servicedeskintegrationtemplatedto`

NewServicedeskintegrationtemplatedtoWithDefaults instantiates a new Servicedeskintegrationtemplatedto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Servicedeskintegrationtemplatedto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Servicedeskintegrationtemplatedto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Servicedeskintegrationtemplatedto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Servicedeskintegrationtemplatedto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Servicedeskintegrationtemplatedto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Servicedeskintegrationtemplatedto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Servicedeskintegrationtemplatedto) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *Servicedeskintegrationtemplatedto) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Servicedeskintegrationtemplatedto) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetCreated

`func (o *Servicedeskintegrationtemplatedto) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Servicedeskintegrationtemplatedto) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Servicedeskintegrationtemplatedto) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Servicedeskintegrationtemplatedto) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Servicedeskintegrationtemplatedto) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Servicedeskintegrationtemplatedto) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Servicedeskintegrationtemplatedto) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Servicedeskintegrationtemplatedto) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetType

`func (o *Servicedeskintegrationtemplatedto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Servicedeskintegrationtemplatedto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Servicedeskintegrationtemplatedto) SetType(v string)`

SetType sets Type field to given value.


### GetAttributes

`func (o *Servicedeskintegrationtemplatedto) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Servicedeskintegrationtemplatedto) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Servicedeskintegrationtemplatedto) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.


### GetProvisioningConfig

`func (o *Servicedeskintegrationtemplatedto) GetProvisioningConfig() Provisioningconfig`

GetProvisioningConfig returns the ProvisioningConfig field if non-nil, zero value otherwise.

### GetProvisioningConfigOk

`func (o *Servicedeskintegrationtemplatedto) GetProvisioningConfigOk() (*Provisioningconfig, bool)`

GetProvisioningConfigOk returns a tuple with the ProvisioningConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisioningConfig

`func (o *Servicedeskintegrationtemplatedto) SetProvisioningConfig(v Provisioningconfig)`

SetProvisioningConfig sets ProvisioningConfig field to given value.



