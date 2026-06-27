---
id: v1-orgconfig
title: Orgconfig
pagination_label: Orgconfig
sidebar_label: Orgconfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Orgconfig', 'V1Orgconfig'] 
slug: /tools/sdk/go/orgconfig/models/orgconfig
tags: ['SDK', 'Software Development Kit', 'Orgconfig', 'V1Orgconfig']
---

# Orgconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OrgName** | Pointer to **string** | The name of the org. | [optional] 
**TimeZone** | Pointer to **string** | The selected time zone which is to be used for the org.  This directly affects when scheduled tasks are executed.  Valid options can be found at /beta/org-config/valid-time-zones | [optional] 
**LcsChangeHonorsSourceEnableFeature** | Pointer to **bool** | Flag to determine whether the LCS_CHANGE_HONORS_SOURCE_ENABLE_FEATURE flag is enabled for the current org. | [optional] 
**ArmCustomerId** | Pointer to **NullableString** | ARM Customer ID | [optional] 
**ArmSapSystemIdMappings** | Pointer to **NullableString** | A list of IDN::sourceId to ARM::systemId mappings. | [optional] 
**ArmAuth** | Pointer to **NullableString** | ARM authentication string | [optional] 
**ArmDb** | Pointer to **NullableString** | ARM database name | [optional] 
**ArmSsoUrl** | Pointer to **NullableString** | ARM SSO URL | [optional] 
**IaiEnableCertificationRecommendations** | Pointer to **bool** | Flag to determine whether IAI Certification Recommendations are enabled for the current org | [optional] 
**SodReportConfigs** | Pointer to [**[]Reportconfigdto**](reportconfigdto) |  | [optional] 

## Methods

### NewOrgconfig

`func NewOrgconfig() *Orgconfig`

NewOrgconfig instantiates a new Orgconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrgconfigWithDefaults

`func NewOrgconfigWithDefaults() *Orgconfig`

NewOrgconfigWithDefaults instantiates a new Orgconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOrgName

`func (o *Orgconfig) GetOrgName() string`

GetOrgName returns the OrgName field if non-nil, zero value otherwise.

### GetOrgNameOk

`func (o *Orgconfig) GetOrgNameOk() (*string, bool)`

GetOrgNameOk returns a tuple with the OrgName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrgName

`func (o *Orgconfig) SetOrgName(v string)`

SetOrgName sets OrgName field to given value.

### HasOrgName

`func (o *Orgconfig) HasOrgName() bool`

HasOrgName returns a boolean if a field has been set.

### GetTimeZone

`func (o *Orgconfig) GetTimeZone() string`

GetTimeZone returns the TimeZone field if non-nil, zero value otherwise.

### GetTimeZoneOk

`func (o *Orgconfig) GetTimeZoneOk() (*string, bool)`

GetTimeZoneOk returns a tuple with the TimeZone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeZone

`func (o *Orgconfig) SetTimeZone(v string)`

SetTimeZone sets TimeZone field to given value.

### HasTimeZone

`func (o *Orgconfig) HasTimeZone() bool`

HasTimeZone returns a boolean if a field has been set.

### GetLcsChangeHonorsSourceEnableFeature

`func (o *Orgconfig) GetLcsChangeHonorsSourceEnableFeature() bool`

GetLcsChangeHonorsSourceEnableFeature returns the LcsChangeHonorsSourceEnableFeature field if non-nil, zero value otherwise.

### GetLcsChangeHonorsSourceEnableFeatureOk

`func (o *Orgconfig) GetLcsChangeHonorsSourceEnableFeatureOk() (*bool, bool)`

GetLcsChangeHonorsSourceEnableFeatureOk returns a tuple with the LcsChangeHonorsSourceEnableFeature field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLcsChangeHonorsSourceEnableFeature

`func (o *Orgconfig) SetLcsChangeHonorsSourceEnableFeature(v bool)`

SetLcsChangeHonorsSourceEnableFeature sets LcsChangeHonorsSourceEnableFeature field to given value.

### HasLcsChangeHonorsSourceEnableFeature

`func (o *Orgconfig) HasLcsChangeHonorsSourceEnableFeature() bool`

HasLcsChangeHonorsSourceEnableFeature returns a boolean if a field has been set.

### GetArmCustomerId

`func (o *Orgconfig) GetArmCustomerId() string`

GetArmCustomerId returns the ArmCustomerId field if non-nil, zero value otherwise.

### GetArmCustomerIdOk

`func (o *Orgconfig) GetArmCustomerIdOk() (*string, bool)`

GetArmCustomerIdOk returns a tuple with the ArmCustomerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArmCustomerId

`func (o *Orgconfig) SetArmCustomerId(v string)`

SetArmCustomerId sets ArmCustomerId field to given value.

### HasArmCustomerId

`func (o *Orgconfig) HasArmCustomerId() bool`

HasArmCustomerId returns a boolean if a field has been set.

### SetArmCustomerIdNil

`func (o *Orgconfig) SetArmCustomerIdNil(b bool)`

 SetArmCustomerIdNil sets the value for ArmCustomerId to be an explicit nil

### UnsetArmCustomerId
`func (o *Orgconfig) UnsetArmCustomerId()`

UnsetArmCustomerId ensures that no value is present for ArmCustomerId, not even an explicit nil
### GetArmSapSystemIdMappings

`func (o *Orgconfig) GetArmSapSystemIdMappings() string`

GetArmSapSystemIdMappings returns the ArmSapSystemIdMappings field if non-nil, zero value otherwise.

### GetArmSapSystemIdMappingsOk

`func (o *Orgconfig) GetArmSapSystemIdMappingsOk() (*string, bool)`

GetArmSapSystemIdMappingsOk returns a tuple with the ArmSapSystemIdMappings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArmSapSystemIdMappings

`func (o *Orgconfig) SetArmSapSystemIdMappings(v string)`

SetArmSapSystemIdMappings sets ArmSapSystemIdMappings field to given value.

### HasArmSapSystemIdMappings

`func (o *Orgconfig) HasArmSapSystemIdMappings() bool`

HasArmSapSystemIdMappings returns a boolean if a field has been set.

### SetArmSapSystemIdMappingsNil

`func (o *Orgconfig) SetArmSapSystemIdMappingsNil(b bool)`

 SetArmSapSystemIdMappingsNil sets the value for ArmSapSystemIdMappings to be an explicit nil

### UnsetArmSapSystemIdMappings
`func (o *Orgconfig) UnsetArmSapSystemIdMappings()`

UnsetArmSapSystemIdMappings ensures that no value is present for ArmSapSystemIdMappings, not even an explicit nil
### GetArmAuth

`func (o *Orgconfig) GetArmAuth() string`

GetArmAuth returns the ArmAuth field if non-nil, zero value otherwise.

### GetArmAuthOk

`func (o *Orgconfig) GetArmAuthOk() (*string, bool)`

GetArmAuthOk returns a tuple with the ArmAuth field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArmAuth

`func (o *Orgconfig) SetArmAuth(v string)`

SetArmAuth sets ArmAuth field to given value.

### HasArmAuth

`func (o *Orgconfig) HasArmAuth() bool`

HasArmAuth returns a boolean if a field has been set.

### SetArmAuthNil

`func (o *Orgconfig) SetArmAuthNil(b bool)`

 SetArmAuthNil sets the value for ArmAuth to be an explicit nil

### UnsetArmAuth
`func (o *Orgconfig) UnsetArmAuth()`

UnsetArmAuth ensures that no value is present for ArmAuth, not even an explicit nil
### GetArmDb

`func (o *Orgconfig) GetArmDb() string`

GetArmDb returns the ArmDb field if non-nil, zero value otherwise.

### GetArmDbOk

`func (o *Orgconfig) GetArmDbOk() (*string, bool)`

GetArmDbOk returns a tuple with the ArmDb field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArmDb

`func (o *Orgconfig) SetArmDb(v string)`

SetArmDb sets ArmDb field to given value.

### HasArmDb

`func (o *Orgconfig) HasArmDb() bool`

HasArmDb returns a boolean if a field has been set.

### SetArmDbNil

`func (o *Orgconfig) SetArmDbNil(b bool)`

 SetArmDbNil sets the value for ArmDb to be an explicit nil

### UnsetArmDb
`func (o *Orgconfig) UnsetArmDb()`

UnsetArmDb ensures that no value is present for ArmDb, not even an explicit nil
### GetArmSsoUrl

`func (o *Orgconfig) GetArmSsoUrl() string`

GetArmSsoUrl returns the ArmSsoUrl field if non-nil, zero value otherwise.

### GetArmSsoUrlOk

`func (o *Orgconfig) GetArmSsoUrlOk() (*string, bool)`

GetArmSsoUrlOk returns a tuple with the ArmSsoUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArmSsoUrl

`func (o *Orgconfig) SetArmSsoUrl(v string)`

SetArmSsoUrl sets ArmSsoUrl field to given value.

### HasArmSsoUrl

`func (o *Orgconfig) HasArmSsoUrl() bool`

HasArmSsoUrl returns a boolean if a field has been set.

### SetArmSsoUrlNil

`func (o *Orgconfig) SetArmSsoUrlNil(b bool)`

 SetArmSsoUrlNil sets the value for ArmSsoUrl to be an explicit nil

### UnsetArmSsoUrl
`func (o *Orgconfig) UnsetArmSsoUrl()`

UnsetArmSsoUrl ensures that no value is present for ArmSsoUrl, not even an explicit nil
### GetIaiEnableCertificationRecommendations

`func (o *Orgconfig) GetIaiEnableCertificationRecommendations() bool`

GetIaiEnableCertificationRecommendations returns the IaiEnableCertificationRecommendations field if non-nil, zero value otherwise.

### GetIaiEnableCertificationRecommendationsOk

`func (o *Orgconfig) GetIaiEnableCertificationRecommendationsOk() (*bool, bool)`

GetIaiEnableCertificationRecommendationsOk returns a tuple with the IaiEnableCertificationRecommendations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIaiEnableCertificationRecommendations

`func (o *Orgconfig) SetIaiEnableCertificationRecommendations(v bool)`

SetIaiEnableCertificationRecommendations sets IaiEnableCertificationRecommendations field to given value.

### HasIaiEnableCertificationRecommendations

`func (o *Orgconfig) HasIaiEnableCertificationRecommendations() bool`

HasIaiEnableCertificationRecommendations returns a boolean if a field has been set.

### GetSodReportConfigs

`func (o *Orgconfig) GetSodReportConfigs() []Reportconfigdto`

GetSodReportConfigs returns the SodReportConfigs field if non-nil, zero value otherwise.

### GetSodReportConfigsOk

`func (o *Orgconfig) GetSodReportConfigsOk() (*[]Reportconfigdto, bool)`

GetSodReportConfigsOk returns a tuple with the SodReportConfigs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSodReportConfigs

`func (o *Orgconfig) SetSodReportConfigs(v []Reportconfigdto)`

SetSodReportConfigs sets SodReportConfigs field to given value.

### HasSodReportConfigs

`func (o *Orgconfig) HasSodReportConfigs() bool`

HasSodReportConfigs returns a boolean if a field has been set.


