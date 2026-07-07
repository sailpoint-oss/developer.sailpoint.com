---
id: v1-federationprotocoldetails
title: Federationprotocoldetails
pagination_label: Federationprotocoldetails
sidebar_label: Federationprotocoldetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Federationprotocoldetails', 'V1Federationprotocoldetails'] 
slug: /tools/sdk/go/globaltenantsecuritysettings/models/federationprotocoldetails
tags: ['SDK', 'Software Development Kit', 'Federationprotocoldetails', 'V1Federationprotocoldetails']
---

# Federationprotocoldetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Role** | Pointer to **string** | Federation protocol role | [optional] 
**EntityId** | Pointer to **string** | An entity ID is a globally unique name for a SAML entity, either an Identity Provider (IDP) or a Service Provider (SP). | [optional] 

## Methods

### NewFederationprotocoldetails

`func NewFederationprotocoldetails() *Federationprotocoldetails`

NewFederationprotocoldetails instantiates a new Federationprotocoldetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFederationprotocoldetailsWithDefaults

`func NewFederationprotocoldetailsWithDefaults() *Federationprotocoldetails`

NewFederationprotocoldetailsWithDefaults instantiates a new Federationprotocoldetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRole

`func (o *Federationprotocoldetails) GetRole() string`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *Federationprotocoldetails) GetRoleOk() (*string, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *Federationprotocoldetails) SetRole(v string)`

SetRole sets Role field to given value.

### HasRole

`func (o *Federationprotocoldetails) HasRole() bool`

HasRole returns a boolean if a field has been set.

### GetEntityId

`func (o *Federationprotocoldetails) GetEntityId() string`

GetEntityId returns the EntityId field if non-nil, zero value otherwise.

### GetEntityIdOk

`func (o *Federationprotocoldetails) GetEntityIdOk() (*string, bool)`

GetEntityIdOk returns a tuple with the EntityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityId

`func (o *Federationprotocoldetails) SetEntityId(v string)`

SetEntityId sets EntityId field to given value.

### HasEntityId

`func (o *Federationprotocoldetails) HasEntityId() bool`

HasEntityId returns a boolean if a field has been set.


