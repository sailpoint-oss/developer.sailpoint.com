---
id: beta-org-config
title: OrgConfig
pagination_label: OrgConfig
sidebar_label: OrgConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'OrgConfig', 'BetaOrgConfig'] 
slug: /tools/sdk/go/beta/models/org-config
tags: ['SDK', 'Software Development Kit', 'OrgConfig', 'BetaOrgConfig']
---

# OrgConfig

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
**SodReportConfigs** | Pointer to [**[]ReportConfigDTO**](report-config-dto) |  | [optional] 

## Methods

### NewOrgConfig

`func NewOrgConfig() *OrgConfig`

NewOrgConfig instantiates a new OrgConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrgConfigWithDefaults

`func NewOrgConfigWithDefaults() *OrgConfig`

NewOrgConfigWithDefaults instantiates a new OrgConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOrgName

`func (o *OrgConfig) GetOrgName() string`

GetOrgName returns the OrgName field if non-nil, zero value otherwise.

### GetOrgNameOk

`func (o *OrgConfig) GetOrgNameOk() (*string, bool)`

GetOrgNameOk returns a tuple with the OrgName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrgName

`func (o *OrgConfig) SetOrgName(v string)`

SetOrgName sets OrgName field to given value.

### HasOrgName

`func (o *OrgConfig) HasOrgName() bool`

HasOrgName returns a boolean if a field has been set.

### GetTimeZone

`func (o *OrgConfig) GetTimeZone() string`

GetTimeZone returns the TimeZone field if non-nil, zero value otherwise.

### GetTimeZoneOk

`func (o *OrgConfig) GetTimeZoneOk() (*string, bool)`

GetTimeZoneOk returns a tuple with the TimeZone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeZone

`func (o *OrgConfig) SetTimeZone(v string)`

SetTimeZone sets TimeZone field to given value.

### HasTimeZone

`func (o *OrgConfig) HasTimeZone() bool`

HasTimeZone returns a boolean if a field has been set.

### GetLcsChangeHonorsSourceEnableFeature

`func (o *OrgConfig) GetLcsChangeHonorsSourceEnableFeature() bool`

GetLcsChangeHonorsSourceEnableFeature returns the LcsChangeHonorsSourceEnableFeature field if non-nil, zero value otherwise.

### GetLcsChangeHonorsSourceEnableFeatureOk

`func (o *OrgConfig) GetLcsChangeHonorsSourceEnableFeatureOk() (*bool, bool)`

GetLcsChangeHonorsSourceEnableFeatureOk returns a tuple with the LcsChangeHonorsSourceEnableFeature field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLcsChangeHonorsSourceEnableFeature

`func (o *OrgConfig) SetLcsChangeHonorsSourceEnableFeature(v bool)`

SetLcsChangeHonorsSourceEnableFeature sets LcsChangeHonorsSourceEnableFeature field to given value.

### HasLcsChangeHonorsSourceEnableFeature

`func (o *OrgConfig) HasLcsChangeHonorsSourceEnableFeature() bool`

HasLcsChangeHonorsSourceEnableFeature returns a boolean if a field has been set.

### GetArmCustomerId

`func (o *OrgConfig) GetArmCustomerId() string`

GetArmCustomerId returns the ArmCustomerId field if non-nil, zero value otherwise.

### GetArmCustomerIdOk

`func (o *OrgConfig) GetArmCustomerIdOk() (*string, bool)`

GetArmCustomerIdOk returns a tuple with the ArmCustomerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArmCustomerId

`func (o *OrgConfig) SetArmCustomerId(v string)`

SetArmCustomerId sets ArmCustomerId field to given value.

### HasArmCustomerId

`func (o *OrgConfig) HasArmCustomerId() bool`

HasArmCustomerId returns a boolean if a field has been set.

### SetArmCustomerIdNil

`func (o *OrgConfig) SetArmCustomerIdNil(b bool)`

 SetArmCustomerIdNil sets the value for ArmCustomerId to be an explicit nil

### UnsetArmCustomerId
`func (o *OrgConfig) UnsetArmCustomerId()`

UnsetArmCustomerId ensures that no value is present for ArmCustomerId, not even an explicit nil
### GetArmSapSystemIdMappings

`func (o *OrgConfig) GetArmSapSystemIdMappings() string`

GetArmSapSystemIdMappings returns the ArmSapSystemIdMappings field if non-nil, zero value otherwise.

### GetArmSapSystemIdMappingsOk

`func (o *OrgConfig) GetArmSapSystemIdMappingsOk() (*string, bool)`

GetArmSapSystemIdMappingsOk returns a tuple with the ArmSapSystemIdMappings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArmSapSystemIdMappings

`func (o *OrgConfig) SetArmSapSystemIdMappings(v string)`

SetArmSapSystemIdMappings sets ArmSapSystemIdMappings field to given value.

### HasArmSapSystemIdMappings

`func (o *OrgConfig) HasArmSapSystemIdMappings() bool`

HasArmSapSystemIdMappings returns a boolean if a field has been set.

### SetArmSapSystemIdMappingsNil

`func (o *OrgConfig) SetArmSapSystemIdMappingsNil(b bool)`

 SetArmSapSystemIdMappingsNil sets the value for ArmSapSystemIdMappings to be an explicit nil

### UnsetArmSapSystemIdMappings
`func (o *OrgConfig) UnsetArmSapSystemIdMappings()`

UnsetArmSapSystemIdMappings ensures that no value is present for ArmSapSystemIdMappings, not even an explicit nil
### GetArmAuth

`func (o *OrgConfig) GetArmAuth() string`

GetArmAuth returns the ArmAuth field if non-nil, zero value otherwise.

### GetArmAuthOk

`func (o *OrgConfig) GetArmAuthOk() (*string, bool)`

GetArmAuthOk returns a tuple with the ArmAuth field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArmAuth

`func (o *OrgConfig) SetArmAuth(v string)`

SetArmAuth sets ArmAuth field to given value.

### HasArmAuth

`func (o *OrgConfig) HasArmAuth() bool`

HasArmAuth returns a boolean if a field has been set.

### SetArmAuthNil

`func (o *OrgConfig) SetArmAuthNil(b bool)`

 SetArmAuthNil sets the value for ArmAuth to be an explicit nil

### UnsetArmAuth
`func (o *OrgConfig) UnsetArmAuth()`

UnsetArmAuth ensures that no value is present for ArmAuth, not even an explicit nil
### GetArmDb

`func (o *OrgConfig) GetArmDb() string`

GetArmDb returns the ArmDb field if non-nil, zero value otherwise.

### GetArmDbOk

`func (o *OrgConfig) GetArmDbOk() (*string, bool)`

GetArmDbOk returns a tuple with the ArmDb field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArmDb

`func (o *OrgConfig) SetArmDb(v string)`

SetArmDb sets ArmDb field to given value.

### HasArmDb

`func (o *OrgConfig) HasArmDb() bool`

HasArmDb returns a boolean if a field has been set.

### SetArmDbNil

`func (o *OrgConfig) SetArmDbNil(b bool)`

 SetArmDbNil sets the value for ArmDb to be an explicit nil

### UnsetArmDb
`func (o *OrgConfig) UnsetArmDb()`

UnsetArmDb ensures that no value is present for ArmDb, not even an explicit nil
### GetArmSsoUrl

`func (o *OrgConfig) GetArmSsoUrl() string`

GetArmSsoUrl returns the ArmSsoUrl field if non-nil, zero value otherwise.

### GetArmSsoUrlOk

`func (o *OrgConfig) GetArmSsoUrlOk() (*string, bool)`

GetArmSsoUrlOk returns a tuple with the ArmSsoUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArmSsoUrl

`func (o *OrgConfig) SetArmSsoUrl(v string)`

SetArmSsoUrl sets ArmSsoUrl field to given value.

### HasArmSsoUrl

`func (o *OrgConfig) HasArmSsoUrl() bool`

HasArmSsoUrl returns a boolean if a field has been set.

### SetArmSsoUrlNil

`func (o *OrgConfig) SetArmSsoUrlNil(b bool)`

 SetArmSsoUrlNil sets the value for ArmSsoUrl to be an explicit nil

### UnsetArmSsoUrl
`func (o *OrgConfig) UnsetArmSsoUrl()`

UnsetArmSsoUrl ensures that no value is present for ArmSsoUrl, not even an explicit nil
### GetIaiEnableCertificationRecommendations

`func (o *OrgConfig) GetIaiEnableCertificationRecommendations() bool`

GetIaiEnableCertificationRecommendations returns the IaiEnableCertificationRecommendations field if non-nil, zero value otherwise.

### GetIaiEnableCertificationRecommendationsOk

`func (o *OrgConfig) GetIaiEnableCertificationRecommendationsOk() (*bool, bool)`

GetIaiEnableCertificationRecommendationsOk returns a tuple with the IaiEnableCertificationRecommendations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIaiEnableCertificationRecommendations

`func (o *OrgConfig) SetIaiEnableCertificationRecommendations(v bool)`

SetIaiEnableCertificationRecommendations sets IaiEnableCertificationRecommendations field to given value.

### HasIaiEnableCertificationRecommendations

`func (o *OrgConfig) HasIaiEnableCertificationRecommendations() bool`

HasIaiEnableCertificationRecommendations returns a boolean if a field has been set.

### GetSodReportConfigs

`func (o *OrgConfig) GetSodReportConfigs() []ReportConfigDTO`

GetSodReportConfigs returns the SodReportConfigs field if non-nil, zero value otherwise.

### GetSodReportConfigsOk

`func (o *OrgConfig) GetSodReportConfigsOk() (*[]ReportConfigDTO, bool)`

GetSodReportConfigsOk returns a tuple with the SodReportConfigs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSodReportConfigs

`func (o *OrgConfig) SetSodReportConfigs(v []ReportConfigDTO)`

SetSodReportConfigs sets SodReportConfigs field to given value.

### HasSodReportConfigs

`func (o *OrgConfig) HasSodReportConfigs() bool`

HasSodReportConfigs returns a boolean if a field has been set.


