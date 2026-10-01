## OpenAPI

```yaml POST /search/v1
openapi: 3.0.1
info:
  title: Identity Security Cloud API
  description: Use these APIs to interact with the Identity Security Cloud platform to achieve repeatable, automated processes with greater scalability. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.
  termsOfService: https://developer.sailpoint.com/discuss/tos
  contact:
    name: Developer Relations
    url: https://developer.sailpoint.com/discuss/api-help
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT
  version: v1
servers:
  - url: https://{tenant}.api.identitynow.com
    description: This is the production API server.
    variables:
      tenant:
        default: sailpoint
        description: This is the name of your tenant, typically your company's name.
  - url: https://{apiUrl}
    description: This is the versioned API server.
    variables:
      apiUrl:
        default: sailpoint.api.identitynow.com
        description: This is the api url of your tenant
paths:
  /search/v1:
    post:
      description: |-
        Perform a search with the provided query and return a matching result collection. To page past 10,000 records, you can use `searchAfter` paging.  Refer to [Paginating Search Queries](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-search-queries) for more information about how to implement `searchAfter` paging. The search query itself has a size limitation of approximately 800 objects when filtering by large lists of IDs or values (e.g., using `terms` filters with extensive lists).
        **Note:** Response fields with an underscore (`_`) prefix, such as `_type` and `_index`, are internal metadata fields. These fields are for SailPoint internal use only and are subject to change without notice. Do not rely on them in your integrations.
      operationId: searchPostV1
      security:
        - userAuth:
            - sp:search:read
        - applicationAuth:
            - sp:search:read
      parameters:
        - in: query
          name: offset
          description: |-
            Offset into the full result set. Usually specified with *limit* to paginate through the results.
            See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
          required: false
          example: 0
          schema:
            type: integer
            format: int32
            minimum: 0
            default: 0
        - in: query
          name: limit
          description: |-
            Max number of results to return.
            See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
          required: false
          example: 10000
          schema:
            type: integer
            format: int32
            minimum: 0
            maximum: 10000
            default: 250
        - in: query
          name: count
          description: |-
            If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.

            Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.

            See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
          required: false
          example: true
          schema:
            type: boolean
            default: false
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                indices:
                  description: The names of the Elasticsearch indices in which to search. If none are provided, then all indices will be searched.
                  externalDocs:
                    description: Learn more about search indices here.
                    url: https://documentation.sailpoint.com/saas/help/search/searchable-fields.html
                  type: array
                  items:
                    description: |-
                      Enum representing the currently supported indices.
                      Additional values may be added in the future without notice.
                    type: string
                    enum:
                      - accessprofiles
                      - accountactivities
                      - entitlements
                      - events
                      - identities
                      - roles
                      - '*'
                    example: identities
                    title: index
                  example:
                    - identities
                queryType:
                  description: |-
                    The type of query to use.  By default, the `SAILPOINT` query type is used, which requires the `query` object to be defined in the request body.
                    To use the `queryDsl` or `typeAheadQuery` objects in the request, you must set the type to `DSL` or `TYPEAHEAD` accordingly.
                    Additional values may be added in the future without notice.
                  type: string
                  enum:
                    - DSL
                    - SAILPOINT
                    - TEXT
                    - TYPEAHEAD
                  default: SAILPOINT
                  example: SAILPOINT
                  title: querytype
                queryVersion:
                  allOf:
                    - description: The current Elasticserver version.
                      type: string
                      default: '5.2'
                      example: '5.2'
                      title: elasticversion
                    - type: string
                      description: |-
                        The version of the query object.
                        This version number will map to the version of Elasticsearch for the query strings and objects being used.
                query:
                  type: object
                  description: Query parameters used to construct an Elasticsearch query object.
                  properties:
                    query:
                      description: The query using the Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL extended by SailPoint to support Nested queries.
                      type: string
                      example: name:a*
                    fields:
                      description: |-
                        The fields the query will be applied to.  Fields provide you with a simple way to add additional fields to search, without making the query too complicated.  For example, you can use the fields to specify that you want your query of "a*" to be applied to "name", "firstName", and the "source.name".  The response will include all results matching the "a*" query found in those three fields. 
                        A field's availability depends on the indices being searched.  For example, if you are searching "identities", you can apply your search to the "firstName" field, but you couldn't use "firstName" with a search on "access profiles".  Refer to the response schema for the respective lists of available fields. 
                      type: string
                      example:
                        - firstName,lastName,email
                    timeZone:
                      description: The time zone to be applied to any range query related to dates.
                      type: string
                      example: America/Chicago
                    innerHit:
                      description: The innerHit query object returns a flattened list of results for the specified nested type.
                      type: object
                      required:
                        - query
                        - type
                      properties:
                        query:
                          description: The search query using the Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL extended by SailPoint to support Nested queries.
                          type: string
                          example: source.name:\"Active Directory\"
                        type:
                          description: The nested type to use in the inner hits query.  The nested type [Nested Type](https://www.elastic.co/guide/en/elasticsearch/reference/current/nested.html) refers to a document "nested" within another document. For example, an identity can have nested documents for access, accounts, and apps.
                          type: string
                          example: access
                      title: innerhit
                  title: query
                queryDsl:
                  description: The search query using the Elasticsearch [Query DSL](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/query-dsl.html) syntax.
                  type: object
                  example:
                    match:
                      name: john.doe
                textQuery:
                  type: object
                  description: Query parameters used to construct an Elasticsearch text query object.
                  required:
                    - terms
                    - fields
                  properties:
                    terms:
                      description: Words or characters that specify a particular thing to be searched for.
                      type: array
                      items:
                        type: string
                      example:
                        - The quick brown fox
                        - '3141592'
                        - '7'
                    fields:
                      description: The fields to be searched.
                      type: array
                      items:
                        type: string
                      example:
                        - displayName
                        - employeeNumber
                        - roleCount
                    matchAny:
                      description: Indicates that at least one of the terms must be found in the specified fields;  otherwise, all terms must be found.
                      type: boolean
                      default: false
                      example: false
                    contains:
                      description: Indicates that the terms can be located anywhere in the specified fields;  otherwise, the fields must begin with the terms.
                      type: boolean
                      default: false
                      example: true
                  title: textquery
                typeAheadQuery:
                  type: object
                  description: 'Query parameters used to construct an Elasticsearch type ahead query object.  The typeAheadQuery performs a search for top values beginning with the typed values. For example, typing "Jo" results in top hits matching "Jo." Typing "Job" results in top hits matching "Job." '
                  required:
                    - query
                    - field
                  properties:
                    query:
                      description: The type ahead query string used to construct a phrase prefix match query.
                      type: string
                      example: Work
                    field:
                      description: The field on which to perform the type ahead search.
                      type: string
                      example: source.name
                    nestedType:
                      description: The nested type.
                      type: string
                      example: access
                    maxExpansions:
                      description: |-
                        The number of suffixes the last term will be expanded into.
                        Influences the performance of the query and the number results returned.
                        Valid values: 1 to 1000.
                      type: integer
                      format: int32
                      minimum: 1
                      maximum: 1000
                      default: 10
                      example: 10
                    size:
                      description: The max amount of records the search will return.
                      type: integer
                      format: int32
                      minimum: 1
                      default: 100
                      example: 100
                    sort:
                      description: The sort order of the returned records.
                      type: string
                      default: desc
                      example: asc
                    sortByValue:
                      description: The flag that defines the sort type, by count or value.
                      type: boolean
                      default: false
                      example: true
                  title: typeaheadquery
                includeNested:
                  description: Indicates whether nested objects from returned search results should be included.
                  type: boolean
                  default: true
                  example: true
                queryResultFilter:
                  type: object
                  description: Allows the query results to be filtered by specifying a list of fields to include and/or exclude from the result documents.
                  properties:
                    includes:
                      description: The list of field names to include in the result documents.
                      type: array
                      items:
                        type: string
                      example:
                        - name
                        - displayName
                    excludes:
                      description: The list of field names to exclude from the result documents.
                      type: array
                      items:
                        type: string
                      example:
                        - stacktrace
                  title: queryresultfilter
                aggregationType:
                  description: |
                    Enum representing the currently available query languages for aggregations, which are used to perform calculations or groupings on search results.

                    Additional values may be added in the future without notice.
                  type: string
                  enum:
                    - DSL
                    - SAILPOINT
                  default: DSL
                  example: DSL
                  title: aggregationtype
                aggregationsVersion:
                  allOf:
                    - description: The current Elasticserver version.
                      type: string
                      default: '5.2'
                      example: '5.2'
                      title: elasticversion
                    - type: string
                      description: |-
                        The version of the language being used for aggregation queries.
                        This version number will map to the version of Elasticsearch for the aggregation query object.
                aggregationsDsl:
                  description: The aggregation search query using Elasticsearch [Aggregations](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/search-aggregations.html) syntax.
                  type: object
                  example: {}
                aggregations:
                  description: |
                    The aggregation’s specifications, such as the groupings and calculations to be performed.
                  allOf:
                    - type: object
                      properties:
                        nested:
                          type: object
                          description: The nested aggregation object.
                          required:
                            - name
                            - type
                          properties:
                            name:
                              description: The name of the nested aggregate to be included in the result.
                              type: string
                              example: id
                            type:
                              description: The type of the nested object.
                              type: string
                              example: access
                          title: nestedaggregation
                        metric:
                          type: object
                          description: The calculation done on the results of the query
                          required:
                            - name
                            - field
                          properties:
                            name:
                              description: |-
                                The name of the metric aggregate to be included in the result.
                                If the metric aggregation is omitted, the resulting aggregation will be a count of the documents in the search results.
                              type: string
                              example: Access Name Count
                            type:
                              description: |-
                                Enum representing the currently supported metric aggregation types.
                                Additional values may be added in the future without notice.
                              type: string
                              enum:
                                - COUNT
                                - UNIQUE_COUNT
                                - AVG
                                - SUM
                                - MEDIAN
                                - MIN
                                - MAX
                              default: UNIQUE_COUNT
                              example: COUNT
                              title: metrictype
                            field:
                              description: |
                                The field the calculation is performed on.

                                Prefix the field name with '@' to reference a nested object.
                              type: string
                              example: '@access.name'
                          title: metricaggregation
                        filter:
                          type: object
                          description: An additional filter to constrain the results of the search query.
                          required:
                            - name
                            - field
                            - value
                          properties:
                            name:
                              description: The name of the filter aggregate to be included in the result.
                              type: string
                              example: Entitlements
                            type:
                              description: |-
                                Enum representing the currently supported filter aggregation types.
                                Additional values may be added in the future without notice.
                              type: string
                              enum:
                                - TERM
                              default: TERM
                              example: TERM
                              title: searchfiltertype
                            field:
                              description: |
                                The search field to apply the filter to.

                                Prefix the field name with '@' to reference a nested object.
                              type: string
                              example: access.type
                            value:
                              description: The value to filter on.
                              type: string
                              example: ENTITLEMENT
                          title: filteraggregation
                        bucket:
                          type: object
                          description: The bucket to group the results of the aggregation query by.
                          required:
                            - name
                            - field
                          properties:
                            name:
                              description: The name of the bucket aggregate to be included in the result.
                              type: string
                              example: Identity Locations
                            type:
                              description: |-
                                Enum representing the currently supported bucket aggregation types.
                                Additional values may be added in the future without notice.
                              type: string
                              enum:
                                - TERMS
                              default: TERMS
                              example: TERMS
                              title: buckettype
                            field:
                              description: |-
                                The field to bucket on.
                                Prefix the field name with '@' to reference a nested object.
                              type: string
                              example: attributes.city
                            size:
                              description: Maximum number of buckets to include.
                              type: integer
                              format: int32
                              example: 100
                            minDocCount:
                              description: Minimum number of documents a bucket should have.
                              type: integer
                              format: int32
                              example: 2
                          title: bucketaggregation
                      title: aggregations
                    - type: object
                      properties:
                        subAggregation:
                          description: Aggregation to be performed on the result of the parent bucket aggregation.
                          allOf:
                            - type: object
                              properties:
                                nested:
                                  type: object
                                  description: The nested aggregation object.
                                  required:
                                    - name
                                    - type
                                  properties:
                                    name:
                                      description: The name of the nested aggregate to be included in the result.
                                      type: string
                                      example: id
                                    type:
                                      description: The type of the nested object.
                                      type: string
                                      example: access
                                  title: nestedaggregation
                                metric:
                                  type: object
                                  description: The calculation done on the results of the query
                                  required:
                                    - name
                                    - field
                                  properties:
                                    name:
                                      description: |-
                                        The name of the metric aggregate to be included in the result.
                                        If the metric aggregation is omitted, the resulting aggregation will be a count of the documents in the search results.
                                      type: string
                                      example: Access Name Count
                                    type:
                                      description: |-
                                        Enum representing the currently supported metric aggregation types.
                                        Additional values may be added in the future without notice.
                                      type: string
                                      enum:
                                        - COUNT
                                        - UNIQUE_COUNT
                                        - AVG
                                        - SUM
                                        - MEDIAN
                                        - MIN
                                        - MAX
                                      default: UNIQUE_COUNT
                                      example: COUNT
                                      title: metrictype
                                    field:
                                      description: |
                                        The field the calculation is performed on.

                                        Prefix the field name with '@' to reference a nested object.
                                      type: string
                                      example: '@access.name'
                                  title: metricaggregation
                                filter:
                                  type: object
                                  description: An additional filter to constrain the results of the search query.
                                  required:
                                    - name
                                    - field
                                    - value
                                  properties:
                                    name:
                                      description: The name of the filter aggregate to be included in the result.
                                      type: string
                                      example: Entitlements
                                    type:
                                      description: |-
                                        Enum representing the currently supported filter aggregation types.
                                        Additional values may be added in the future without notice.
                                      type: string
                                      enum:
                                        - TERM
                                      default: TERM
                                      example: TERM
                                      title: searchfiltertype
                                    field:
                                      description: |
                                        The search field to apply the filter to.

                                        Prefix the field name with '@' to reference a nested object.
                                      type: string
                                      example: access.type
                                    value:
                                      description: The value to filter on.
                                      type: string
                                      example: ENTITLEMENT
                                  title: filteraggregation
                                bucket:
                                  type: object
                                  description: The bucket to group the results of the aggregation query by.
                                  required:
                                    - name
                                    - field
                                  properties:
                                    name:
                                      description: The name of the bucket aggregate to be included in the result.
                                      type: string
                                      example: Identity Locations
                                    type:
                                      description: |-
                                        Enum representing the currently supported bucket aggregation types.
                                        Additional values may be added in the future without notice.
                                      type: string
                                      enum:
                                        - TERMS
                                      default: TERMS
                                      example: TERMS
                                      title: buckettype
                                    field:
                                      description: |-
                                        The field to bucket on.
                                        Prefix the field name with '@' to reference a nested object.
                                      type: string
                                      example: attributes.city
                                    size:
                                      description: Maximum number of buckets to include.
                                      type: integer
                                      format: int32
                                      example: 100
                                    minDocCount:
                                      description: Minimum number of documents a bucket should have.
                                      type: integer
                                      format: int32
                                      example: 2
                                  title: bucketaggregation
                              title: aggregations
                            - type: object
                              properties:
                                subAggregation:
                                  type: object
                                  properties:
                                    nested:
                                      type: object
                                      description: The nested aggregation object.
                                      required:
                                        - name
                                        - type
                                      properties:
                                        name:
                                          description: The name of the nested aggregate to be included in the result.
                                          type: string
                                          example: id
                                        type:
                                          description: The type of the nested object.
                                          type: string
                                          example: access
                                      title: nestedaggregation
                                    metric:
                                      type: object
                                      description: The calculation done on the results of the query
                                      required:
                                        - name
                                        - field
                                      properties:
                                        name:
                                          description: |-
                                            The name of the metric aggregate to be included in the result.
                                            If the metric aggregation is omitted, the resulting aggregation will be a count of the documents in the search results.
                                          type: string
                                          example: Access Name Count
                                        type:
                                          description: |-
                                            Enum representing the currently supported metric aggregation types.
                                            Additional values may be added in the future without notice.
                                          type: string
                                          enum:
                                            - COUNT
                                            - UNIQUE_COUNT
                                            - AVG
                                            - SUM
                                            - MEDIAN
                                            - MIN
                                            - MAX
                                          default: UNIQUE_COUNT
                                          example: COUNT
                                          title: metrictype
                                        field:
                                          description: |
                                            The field the calculation is performed on.

                                            Prefix the field name with '@' to reference a nested object.
                                          type: string
                                          example: '@access.name'
                                      title: metricaggregation
                                    filter:
                                      type: object
                                      description: An additional filter to constrain the results of the search query.
                                      required:
                                        - name
                                        - field
                                        - value
                                      properties:
                                        name:
                                          description: The name of the filter aggregate to be included in the result.
                                          type: string
                                          example: Entitlements
                                        type:
                                          description: |-
                                            Enum representing the currently supported filter aggregation types.
                                            Additional values may be added in the future without notice.
                                          type: string
                                          enum:
                                            - TERM
                                          default: TERM
                                          example: TERM
                                          title: searchfiltertype
                                        field:
                                          description: |
                                            The search field to apply the filter to.

                                            Prefix the field name with '@' to reference a nested object.
                                          type: string
                                          example: access.type
                                        value:
                                          description: The value to filter on.
                                          type: string
                                          example: ENTITLEMENT
                                      title: filteraggregation
                                    bucket:
                                      type: object
                                      description: The bucket to group the results of the aggregation query by.
                                      required:
                                        - name
                                        - field
                                      properties:
                                        name:
                                          description: The name of the bucket aggregate to be included in the result.
                                          type: string
                                          example: Identity Locations
                                        type:
                                          description: |-
                                            Enum representing the currently supported bucket aggregation types.
                                            Additional values may be added in the future without notice.
                                          type: string
                                          enum:
                                            - TERMS
                                          default: TERMS
                                          example: TERMS
                                          title: buckettype
                                        field:
                                          description: |-
                                            The field to bucket on.
                                            Prefix the field name with '@' to reference a nested object.
                                          type: string
                                          example: attributes.city
                                        size:
                                          description: Maximum number of buckets to include.
                                          type: integer
                                          format: int32
                                          example: 100
                                        minDocCount:
                                          description: Minimum number of documents a bucket should have.
                                          type: integer
                                          format: int32
                                          example: 2
                                      title: bucketaggregation
                                  title: aggregations
                                  description: Aggregation to be performed on the result of the parent bucket aggregation.
                          title: subsearchaggregationspecification
                  title: searchaggregationspecification
                sort:
                  description: The fields to be used to sort the search results. Use + or - to specify the sort direction.
                  type: array
                  items:
                    type: string
                  example:
                    - displayName
                    - +id
                searchAfter:
                  description: |-
                    Used to begin the search window at the values specified.
                    This parameter consists of the last values of the sorted fields in the current record set.
                    This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.
                    It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.
                    For example, when searching for identities, if you are sorting by displayName you will also want to include ID, for example ["displayName", "id"]. 
                    If the last identity ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last displayName is "John Doe", then using that displayName and ID will start a new search after this identity.
                    The searchAfter value will look like ["John Doe","2c91808375d8e80a0175e1f88a575221"]
                  type: array
                  items:
                    type: string
                  example:
                    - John Doe
                    - 2c91808375d8e80a0175e1f88a575221
                filters:
                  description: The filters to be applied for each filtered field name.
                  type: object
                  additionalProperties:
                    type: object
                    properties:
                      type:
                        description: |-
                          Enum representing the currently supported filter types.
                          Additional values may be added in the future without notice.
                        type: string
                        enum:
                          - EXISTS
                          - RANGE
                          - TERMS
                        example: RANGE
                        title: filtertype
                      range:
                        type: object
                        description: The range of values to be filtered.
                        properties:
                          lower:
                            description: The lower bound of the range.
                            type: object
                            required:
                              - value
                            properties:
                              value:
                                description: The value of the range's endpoint.
                                type: string
                                example: '1'
                              inclusive:
                                description: Indicates if the endpoint is included in the range.
                                type: boolean
                                default: false
                                example: false
                            title: bound
                          upper:
                            description: The upper bound of the range.
                            type: object
                            required:
                              - value
                            properties:
                              value:
                                description: The value of the range's endpoint.
                                type: string
                                example: '1'
                              inclusive:
                                description: Indicates if the endpoint is included in the range.
                                type: boolean
                                default: false
                                example: false
                            title: bound
                        title: range
                      terms:
                        description: The terms to be filtered.
                        type: array
                        items:
                          type: string
                          example: account_count
                      exclude:
                        description: Indicates if the filter excludes results.
                        type: boolean
                        default: false
                        example: false
                    title: filter
                  example: {}
              title: search
            examples:
              accessProfiles:
                summary: Query for access profiles
                value:
                  indices:
                    - accessprofiles
                  query:
                    query: requestable:true
              accountActivities:
                summary: Query for acccount activities
                value:
                  indices:
                    - accountactivities
                  query:
                    query: sources:"Active Directory"
              entitlements:
                summary: Query for entitlements
                value:
                  indices:
                    - entitlements
                  query:
                    query: source.name:Finance
              events:
                summary: Query for events
                value:
                  indices:
                    - events
                  query:
                    query: type:PROVISIONING
              identities:
                summary: Query for identities
                value:
                  indices:
                    - identities
                  query:
                    query: attributes.cloudLifecycleState:active
              roles:
                summary: Query for roles
                value:
                  indices:
                    - roles
                  query:
                    query: enabled:true
              query-fields:
                summary: Query with fields
                value:
                  indices:
                    - identities
                  query:
                    query: '"John Doe"'
                    fields:
                      - name
              query-timeZone:
                summary: Query with timezone
                value:
                  indices:
                    - identities
                  query:
                    query: 'created: [2022-05-19T19:26:03.351Z TO now]'
                    timeZone: America/Los_Angeles
              query-innerHit:
                summary: Query with innerhit
                value:
                  indices:
                    - identities
                  query:
                    query: '"John Doe"'
                    innerHit:
                      type: access
                      query: source.name:"Active Directory"
              typeAheadQuery:
                summary: Typeahead query
                value:
                  indices:
                    - identities
                  queryType: TYPEAHEAD
                  typeAheadQuery:
                    field: name
                    query: Jo
                    maxExpansions: 50
                    size: 100
                    sort: desc
                    sortByValue: false
              typeAheadQuery-nestedType:
                summary: Typeahead query with nestedtype
                value:
                  indices:
                    - identities
                  queryType: TYPEAHEAD
                  typeAheadQuery:
                    field: source.name
                    nestedType: access
                    query: Work
                    maxExpansions: 50
                    size: 100
                    sort: desc
                    sortByValue: false
              filter-exists:
                summary: Filter with exists
                value:
                  indices:
                    - identities
                  query:
                    query: attributes.city:Austin
                  filters:
                    attributes.personalEmail:
                      type: EXISTS
                      exclude: true
              filter-range:
                summary: Filter with range
                value:
                  indices:
                    - identities
                  query:
                    query: attributes.city:London
                    timeZone: Europe/London
                  filters:
                    accessCount:
                      type: RANGE
                      range:
                        lower:
                          value: '3'
                    created:
                      type: RANGE
                      range:
                        lower:
                          value: '2023-12-01'
                          inclusive: true
                        upper:
                          value: '2025-01-01'
              filter-terms:
                summary: Filter with terms
                value:
                  indices:
                    - identities
                  query:
                    query: attributes.city:London
                  filters:
                    source.name:
                      type: TERMS
                      terms:
                        - HR Employees
                        - Corporate Active Directory
                      exclude: true
                    isManager:
                      type: TERMS
                      terms:
                        - 'true'
        required: true
      responses:
        '200':
          description: List of matching documents.
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  oneOf:
                    - type: object
                      allOf:
                        - description: 'More complete representation of an access profile.  '
                          allOf:
                            - type: object
                              properties:
                                description:
                                  type: string
                                  description: Access item's description.
                                  example: Admin access
                                created:
                                  type: string
                                  description: ISO-8601 date-time referring to the time when the object was created.
                                  nullable: true
                                  format: date-time
                                  example: '2018-06-25T20:22:28.104Z'
                                modified:
                                  type: string
                                  description: ISO-8601 date-time referring to the time when the object was last modified.
                                  nullable: true
                                  format: date-time
                                  example: '2018-06-25T20:22:28.104Z'
                                synced:
                                  type: string
                                  description: |-
                                    ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.  
                                    This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database. 
                                    There may be some delay between the `synced` time and the time when the updated data is actually available in the search API. 
                                  nullable: true
                                  format: date-time
                                  example: '2018-06-25T20:22:33.104Z'
                                enabled:
                                  type: boolean
                                  description: Indicates whether the access item is currently enabled.
                                  default: false
                                  example: true
                                requestable:
                                  type: boolean
                                  description: Indicates whether the access item can be requested.
                                  default: true
                                  example: true
                                requestCommentsRequired:
                                  type: boolean
                                  description: Indicates whether comments are required for requests to access the item.
                                  default: false
                                  example: false
                                owner:
                                  type: object
                                  description: Owner's identity.
                                  properties:
                                    type:
                                      type: string
                                      description: Owner's DTO type.
                                      enum:
                                        - IDENTITY
                                      example: IDENTITY
                                    id:
                                      type: string
                                      description: Owner's identity ID.
                                      example: 2c9180a46faadee4016fb4e018c20639
                                    name:
                                      type: string
                                      description: Owner's display name.
                                      example: Support
                                    email:
                                      type: string
                                      description: Owner's email.
                                      example: cloud-support@sailpoint.com
                              title: baseaccess
                            - type: object
                              required:
                                - id
                                - name
                              properties:
                                id:
                                  type: string
                                  description: Access profile's ID.
                                  example: 2c9180825a6c1adc015a71c9023f0818
                                name:
                                  type: string
                                  description: Access profile's name.
                                  example: Cloud Eng
                                source:
                                  type: object
                                  description: Access profile's source.
                                  properties:
                                    id:
                                      type: string
                                      description: Source's ID.
                                      example: ff8081815757d4fb0157588f3d9d008f
                                    name:
                                      type: string
                                      description: Source's name.
                                      example: Employees
                                entitlements:
                                  type: array
                                  description: Entitlements the access profile has access to.
                                  items:
                                    type: object
                                    properties:
                                      hasPermissions:
                                        type: boolean
                                        description: Indicates whether the entitlement has permissions.
                                        default: false
                                        example: false
                                      description:
                                        type: string
                                        description: Entitlement's description.
                                        nullable: true
                                        example: Cloud engineering
                                      attribute:
                                        type: string
                                        description: Entitlement attribute's name.
                                        example: memberOf
                                      value:
                                        type: string
                                        description: Entitlement's value.
                                        example: CN=Cloud Engineering,DC=sailpoint,DC=COM
                                      schema:
                                        type: string
                                        description: Entitlement's schema.
                                        example: group
                                      privileged:
                                        type: boolean
                                        description: Indicates whether the entitlement is privileged.
                                        default: false
                                        example: false
                                      id:
                                        type: string
                                        description: Entitlement's ID.
                                        example: 2c918084575812550157589064f33b89
                                      name:
                                        type: string
                                        description: Entitlement's name.
                                        example: CN=Cloud Engineering,DC=sailpoint,DC=COM
                                    title: baseentitlement
                                entitlementCount:
                                  type: integer
                                  description: Number of entitlements.
                                  example: 5
                                segments:
                                  type: array
                                  description: Segments with the access profile.
                                  items:
                                    type: object
                                    properties:
                                      id:
                                        type: string
                                        example: b009b6e3-b56d-41d9-8735-cb532ea0b017
                                        description: Segment's unique ID.
                                      name:
                                        type: string
                                        example: Test Segment
                                        description: Segment's display name.
                                    title: basesegment
                                segmentCount:
                                  type: integer
                                  description: Number of segments with the access profile.
                                  format: int32
                                  example: 1
                                tags:
                                  type: array
                                  description: Tags that have been applied to the object.
                                  items:
                                    type: string
                                  example:
                                    - TAG_1
                                    - TAG_2
                                  title: tags
                                apps:
                                  type: array
                                  description: Applications with the access profile
                                  items:
                                    type: object
                                    properties:
                                      id:
                                        type: string
                                        example: 2c91808568c529c60168cca6f90c1313
                                        description: The unique ID of the referenced object.
                                      name:
                                        type: string
                                        description: Name of application
                                        example: Travel and Expense
                                      description:
                                        description: Description of application.
                                        type: string
                                        example: Travel and Expense Application
                                      owner:
                                        type: object
                                        description: Owner's identity.
                                        properties:
                                          type:
                                            type: string
                                            description: Owner's DTO type.
                                            enum:
                                              - IDENTITY
                                            example: IDENTITY
                                          id:
                                            type: string
                                            description: Owner's identity ID.
                                            example: 2c9180a46faadee4016fb4e018c20639
                                          name:
                                            type: string
                                            description: Owner's display name.
                                            example: John Doe
                                          email:
                                            type: string
                                            description: Owner's email.
                                            example: john.doe@sailpoint.com
                                    title: accessapps
                          title: accessprofiledocument
                        - type: object
                          properties:
                            pod:
                              type: string
                              example: pod01-useast1
                              description: Name of the pod.
                            org:
                              type: string
                              example: org-name
                              description: Name of the tenant.
                            _type:
                              description: |-
                                Enum representing the currently supported document types.

                                Additional values may be added in the future without notice.
                              type: string
                              enum:
                                - accessprofile
                                - accountactivity
                                - entitlement
                                - event
                                - identity
                                - role
                              example: identity
                              title: documenttype
                            type:
                              description: |-
                                Enum representing the currently supported document types.

                                Additional values may be added in the future without notice.
                              type: string
                              enum:
                                - accessprofile
                                - accountactivity
                                - entitlement
                                - event
                                - identity
                                - role
                              example: identity
                              title: documenttype
                            _index:
                              type: string
                              example: '44'
                              description: Internal metadata field. This field is for SailPoint internal use only and is subject to change without notice. Do not rely on it in your integrations.
                          title: documentfields
                      title: accessprofiledocuments
                    - type: object
                      allOf:
                        - description: AccountActivity
                          type: object
                          properties:
                            id:
                              type: string
                              example: 2c91808375d8e80a0175e1f88a575222
                              description: ID of account activity.
                            action:
                              type: string
                              description: Type of action performed in the activity.
                              externalDocs:
                                description: Learn more about account activity action types
                                url: https://documentation.sailpoint.com/saas/help/search/searchable-fields.html#searching-account-activity-data
                              example: Identity Refresh.
                            created:
                              type: string
                              description: ISO-8601 date-time referring to the time when the object was created.
                              nullable: true
                              format: date-time
                              example: '2018-06-25T20:22:28.104Z'
                            modified:
                              type: string
                              description: ISO-8601 date-time referring to the time when the object was last modified.
                              nullable: true
                              format: date-time
                              example: '2018-06-25T20:22:28.104Z'
                            synced:
                              type: string
                              description: |-
                                ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.  
                                This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database. 
                                There may be some delay between the `synced` time and the time when the updated data is actually available in the search API. 
                              example: '2018-06-25T20:22:28.104Z'
                            stage:
                              type: string
                              description: Activity's current stage.
                              example: Completed
                            status:
                              type: string
                              description: Activity's current status.
                              example: Complete
                            requester:
                              allOf:
                                - type: object
                                  properties:
                                    id:
                                      type: string
                                      example: 2c91808568c529c60168cca6f90c1313
                                      description: The unique ID of the referenced object.
                                    name:
                                      type: string
                                      example: John Doe
                                      description: The human readable name of the referenced object.
                                  title: reference
                                - type: object
                                  properties:
                                    type:
                                      type: string
                                      example: Identity
                                      description: Type of object
                              title: activityidentity
                            recipient:
                              allOf:
                                - type: object
                                  properties:
                                    id:
                                      type: string
                                      example: 2c91808568c529c60168cca6f90c1313
                                      description: The unique ID of the referenced object.
                                    name:
                                      type: string
                                      example: John Doe
                                      description: The human readable name of the referenced object.
                                  title: reference
                                - type: object
                                  properties:
                                    type:
                                      type: string
                                      example: Identity
                                      description: Type of object
                              title: activityidentity
                            trackingNumber:
                              type: string
                              description: Account activity's tracking number.
                              example: 61aad0c9e8134eca89e76a35e0cabe3f
                            errors:
                              type: array
                              description: Errors provided by the source while completing account actions.
                              items:
                                type: string
                              nullable: true
                              example: null
                            warnings:
                              type: array
                              description: Warnings provided by the source while completing account actions.
                              items:
                                type: string
                              nullable: true
                              example: null
                            approvals:
                              type: array
                              description: Approvals performed on an item during activity.
                              items:
                                type: object
                                properties:
                                  comments:
                                    type: array
                                    items:
                                      type: object
                                      properties:
                                        comment:
                                          type: string
                                          description: The comment text
                                          example: This request was autoapproved by our automated ETS subscriber.
                                        commenter:
                                          type: string
                                          description: The name of the commenter
                                          example: Automated AR Approval
                                        date:
                                          type: string
                                          nullable: true
                                          format: date-time
                                          example: '2018-06-25T20:22:28.104Z'
                                          description: A date-time in ISO-8601 format
                                          title: datetime
                                      title: approvalcomment-2
                                  modified:
                                    type: string
                                    nullable: true
                                    format: date-time
                                    example: '2018-06-25T20:22:28.104Z'
                                    description: A date-time in ISO-8601 format
                                    title: datetime
                                  owner:
                                    allOf:
                                      - type: object
                                        properties:
                                          id:
                                            type: string
                                            example: 2c91808568c529c60168cca6f90c1313
                                            description: The unique ID of the referenced object.
                                          name:
                                            type: string
                                            example: John Doe
                                            description: The human readable name of the referenced object.
                                        title: reference
                                      - type: object
                                        properties:
                                          type:
                                            type: string
                                            example: Identity
                                            description: Type of object
                                    title: activityidentity
                                  result:
                                    type: string
                                    description: The result of the approval
                                    example: Finished
                                  attributeRequest:
                                    type: object
                                    properties:
                                      name:
                                        type: string
                                        description: Attribute name.
                                        example: groups
                                      op:
                                        type: string
                                        description: Operation to perform on attribute.
                                        example: Add
                                      value:
                                        oneOf:
                                          - type: string
                                            example: '3203537556531076'
                                          - type: array
                                            items:
                                              type: string
                                              example:
                                                - '3203537556531076'
                                                - '1263537556831096'
                                        description: Value of attribute.
                                    title: attributerequest
                                  source:
                                    allOf:
                                      - type: object
                                        properties:
                                          id:
                                            type: string
                                            example: 2c91808568c529c60168cca6f90c1313
                                            description: The unique ID of the referenced object.
                                          name:
                                            type: string
                                            example: John Doe
                                            description: The human readable name of the referenced object.
                                        title: reference
                                      - type: object
                                        properties:
                                          type:
                                            type: string
                                            example: Delimited File
                                            description: Type of source returned.
                                    title: accountsource
                                title: approval
                            originalRequests:
                              type: array
                              description: Original actions that triggered all individual source actions related to the account action.
                              items:
                                type: object
                                properties:
                                  accountId:
                                    type: string
                                    description: Account ID.
                                    example: CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com
                                  result:
                                    type: object
                                    properties:
                                      status:
                                        type: string
                                        description: Request result status
                                        example: Manual Task Created
                                    title: result
                                  attributeRequests:
                                    type: array
                                    description: Attribute changes requested for account.
                                    items:
                                      type: object
                                      properties:
                                        name:
                                          type: string
                                          description: Attribute name.
                                          example: groups
                                        op:
                                          type: string
                                          description: Operation to perform on attribute.
                                          example: Add
                                        value:
                                          oneOf:
                                            - type: string
                                              example: '3203537556531076'
                                            - type: array
                                              items:
                                                type: string
                                                example:
                                                  - '3203537556531076'
                                                  - '1263537556831096'
                                          description: Value of attribute.
                                      title: attributerequest
                                  op:
                                    type: string
                                    description: Operation used.
                                    example: add
                                  source:
                                    allOf:
                                      - type: object
                                        properties:
                                          id:
                                            type: string
                                            example: 2c91808568c529c60168cca6f90c1313
                                            description: The unique ID of the referenced object.
                                          name:
                                            type: string
                                            example: John Doe
                                            description: The human readable name of the referenced object.
                                        title: reference
                                      - type: object
                                        properties:
                                          type:
                                            type: string
                                            example: Delimited File
                                            description: Type of source returned.
                                    title: accountsource
                                    description: Account's source.
                                title: originalrequest
                            expansionItems:
                              type: array
                              description: Controls that translated the attribute requests into actual provisioning actions on the source.
                              items:
                                type: object
                                properties:
                                  accountId:
                                    type: string
                                    description: The ID of the account
                                    example: 2c91808981f58ea601821c3e93482e6f
                                  cause:
                                    type: string
                                    example: Role
                                    description: Cause of the expansion item.
                                  name:
                                    type: string
                                    description: The name of the item
                                    example: smartsheet-role
                                  attributeRequest:
                                    type: object
                                    properties:
                                      name:
                                        type: string
                                        description: Attribute name.
                                        example: groups
                                      op:
                                        type: string
                                        description: Operation to perform on attribute.
                                        example: Add
                                      value:
                                        oneOf:
                                          - type: string
                                            example: '3203537556531076'
                                          - type: array
                                            items:
                                              type: string
                                              example:
                                                - '3203537556531076'
                                                - '1263537556831096'
                                        description: Value of attribute.
                                    title: attributerequest
                                  source:
                                    allOf:
                                      - type: object
                                        properties:
                                          id:
                                            type: string
                                            example: 2c91808568c529c60168cca6f90c1313
                                            description: The unique ID of the referenced object.
                                          name:
                                            type: string
                                            example: John Doe
                                            description: The human readable name of the referenced object.
                                        title: reference
                                      - type: object
                                        properties:
                                          type:
                                            type: string
                                            example: Delimited File
                                            description: Type of source returned.
                                    title: accountsource
                                  id:
                                    type: string
                                    description: ID of the expansion item
                                    example: ac2887ffe0e7435a8c18c73f7ae94c7b
                                  state:
                                    type: string
                                    description: State of the expansion item
                                    example: EXECUTING
                                title: expansionitem
                            accountRequests:
                              type: array
                              description: Account data for each individual source action triggered by the original requests.
                              items:
                                type: object
                                properties:
                                  accountId:
                                    type: string
                                    description: Unique ID of the account
                                    example: John.Doe
                                  attributeRequests:
                                    type: array
                                    items:
                                      type: object
                                      properties:
                                        name:
                                          type: string
                                          description: Attribute name.
                                          example: groups
                                        op:
                                          type: string
                                          description: Operation to perform on attribute.
                                          example: Add
                                        value:
                                          oneOf:
                                            - type: string
                                              example: '3203537556531076'
                                            - type: array
                                              items:
                                                type: string
                                                example:
                                                  - '3203537556531076'
                                                  - '1263537556831096'
                                          description: Value of attribute.
                                      title: attributerequest
                                  op:
                                    type: string
                                    example: Modify
                                    description: The operation that was performed
                                  provisioningTarget:
                                    allOf:
                                      - type: object
                                        properties:
                                          id:
                                            type: string
                                            example: 2c91808568c529c60168cca6f90c1313
                                            description: The unique ID of the referenced object.
                                          name:
                                            type: string
                                            example: John Doe
                                            description: The human readable name of the referenced object.
                                        title: reference
                                      - type: object
                                        properties:
                                          type:
                                            type: string
                                            example: Delimited File
                                            description: Type of source returned.
                                    title: accountsource
                                  result:
                                    type: object
                                    properties:
                                      errors:
                                        type: array
                                        items:
                                          type: string
                                          example: |-
                                            [ConnectorError] [
                                              {
                                                "code": "unrecognized_keys",
                                                "keys": [
                                                  "groups"
                                                ],
                                                "path": [],
                                                "message": "Unrecognized key(s) in object: 'groups'"
                                              }
                                            ] (requestId: 5e9d6df5-9b1b-47d9-9bf1-dc3a2893299e)
                                        description: Error message.
                                      status:
                                        type: string
                                        description: The status of the account request
                                        example: failed
                                      ticketId:
                                        type: string
                                        nullable: true
                                        example: null
                                        description: ID of associated ticket.
                                  source:
                                    allOf:
                                      - type: object
                                        properties:
                                          id:
                                            type: string
                                            example: 2c91808568c529c60168cca6f90c1313
                                            description: The unique ID of the referenced object.
                                          name:
                                            type: string
                                            example: John Doe
                                            description: The human readable name of the referenced object.
                                        title: reference
                                      - type: object
                                        properties:
                                          type:
                                            type: string
                                            example: Delimited File
                                            description: Type of source returned.
                                    title: accountsource
                                title: accountrequest
                            sources:
                              type: string
                              description: Sources involved in the account activity.
                              example: smartsheet-test, airtable-v4, IdentityNow
                          title: accountactivitydocument
                        - type: object
                          properties:
                            pod:
                              type: string
                              example: pod01-useast1
                              description: Name of the pod.
                            org:
                              type: string
                              example: org-name
                              description: Name of the tenant.
                            _type:
                              description: |-
                                Enum representing the currently supported document types.

                                Additional values may be added in the future without notice.
                              type: string
                              enum:
                                - accessprofile
                                - accountactivity
                                - entitlement
                                - event
                                - identity
                                - role
                              example: identity
                              title: documenttype
                            type:
                              description: |-
                                Enum representing the currently supported document types.

                                Additional values may be added in the future without notice.
                              type: string
                              enum:
                                - accessprofile
                                - accountactivity
                                - entitlement
                                - event
                                - identity
                                - role
                              example: identity
                              title: documenttype
                            _index:
                              type: string
                              example: '44'
                              description: Internal metadata field. This field is for SailPoint internal use only and is subject to change without notice. Do not rely on it in your integrations.
                          title: documentfields
                      title: accountactivitydocuments
                    - type: object
                      allOf:
                        - description: Entitlement
                          allOf:
                            - type: object
                              required:
                                - id
                                - name
                              properties:
                                id:
                                  type: string
                                  example: 2c91808375d8e80a0175e1f88a575222
                                  description: ID of the referenced object.
                                name:
                                  type: string
                                  example: john.doe
                                  description: The human readable name of the referenced object.
                              title: basedocument
                            - type: object
                              properties:
                                modified:
                                  type: string
                                  description: ISO-8601 date-time referring to the time when the object was last modified.
                                  nullable: true
                                  format: date-time
                                  example: '2018-06-25T20:22:28.104Z'
                                synced:
                                  type: string
                                  description: |-
                                    ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.  
                                    This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database. 
                                    There may be some delay between the `synced` time and the time when the updated data is actually available in the search API. 
                                displayName:
                                  type: string
                                  description: Entitlement's display name.
                                  example: Admin
                                source:
                                  type: object
                                  description: Entitlement's source.
                                  properties:
                                    id:
                                      type: string
                                      description: ID of entitlement's source.
                                      example: 2c91808b6e9e6fb8016eec1a2b6f7b5f
                                    name:
                                      type: string
                                      description: Display name of entitlement's source.
                                      example: ODS-HR-Employees
                                    type:
                                      type: string
                                      example: SOURCE
                                      description: Type of object.
                                segments:
                                  type: array
                                  description: Segments with the entitlement.
                                  items:
                                    type: object
                                    properties:
                                      id:
                                        type: string
                                        example: b009b6e3-b56d-41d9-8735-cb532ea0b017
                                        description: Segment's unique ID.
                                      name:
                                        type: string
                                        example: Test Segment
                                        description: Segment's display name.
                                    title: basesegment
                                segmentCount:
                                  type: integer
                                  description: Number of segments with the role.
                                  format: int32
                                  example: 1
                                requestable:
                                  type: boolean
                                  description: Indicates whether the entitlement is requestable.
                                  default: false
                                  example: false
                                cloudGoverned:
                                  type: boolean
                                  description: Indicates whether the entitlement is cloud governed.
                                  default: false
                                  example: false
                                created:
                                  type: string
                                  description: ISO-8601 date-time referring to the time when the object was created.
                                  nullable: true
                                  format: date-time
                                  example: '2018-06-25T20:22:28.104Z'
                                privileged:
                                  type: boolean
                                  description: Indicates whether the entitlement is privileged.
                                  default: false
                                  example: false
                                tags:
                                  type: array
                                  description: Tags that have been applied to the object.
                                  items:
                                    type: string
                                  example:
                                    - TAG_1
                                    - TAG_2
                                  title: tags
                                attribute:
                                  type: string
                                  description: Attribute information for the entitlement.
                                  example: groups
                                value:
                                  type: string
                                  description: Value of the entitlement.
                                  example: 1733ff75-441e-4327-9bfc-3ac445fd8cd1
                                sourceSchemaObjectType:
                                  type: string
                                  description: Source schema object type of the entitlement.
                                  example: group
                                schema:
                                  type: string
                                  description: Schema type of the entitlement.
                                  example: group
                                hash:
                                  type: string
                                  description: Read-only calculated hash value of an entitlement.
                                  example: c6fab95235584cca98a454a2f51e5683bc77d6a0
                                attributes:
                                  type: object
                                  additionalProperties: true
                                  description: Attributes of the entitlement.
                                truncatedAttributes:
                                  type: array
                                  description: Truncated attributes of the entitlement.
                                  items:
                                    type: string
                                containsDataAccess:
                                  type: boolean
                                  description: Indicates whether the entitlement contains data access.
                                  default: false
                                manuallyUpdatedFields:
                                  type: object
                                  description: Indicates whether the entitlement's display name and/or description have been manually updated.
                                  nullable: true
                                  properties:
                                    DESCRIPTION:
                                      type: boolean
                                      default: false
                                      example: false
                                    DISPLAY_NAME:
                                      type: boolean
                                      default: false
                                      example: false
                                permissions:
                                  type: array
                                  items:
                                    type: object
                                    properties:
                                      target:
                                        type: string
                                        description: The target the permission would grants rights on.
                                        example: SYS.GV_$TRANSACTION
                                      rights:
                                        type: array
                                        description: All the rights (e.g. actions) that this permission allows on the target
                                        items:
                                          type: string
                                          example: SELECT
                          title: entitlementdocument
                        - type: object
                          properties:
                            pod:
                              type: string
                              example: pod01-useast1
                              description: Name of the pod.
                            org:
                              type: string
                              example: org-name
                              description: Name of the tenant.
                            _type:
                              description: |-
                                Enum representing the currently supported document types.

                                Additional values may be added in the future without notice.
                              type: string
                              enum:
                                - accessprofile
                                - accountactivity
                                - entitlement
                                - event
                                - identity
                                - role
                              example: identity
                              title: documenttype
                            type:
                              description: |-
                                Enum representing the currently supported document types.

                                Additional values may be added in the future without notice.
                              type: string
                              enum:
                                - accessprofile
                                - accountactivity
                                - entitlement
                                - event
                                - identity
                                - role
                              example: identity
                              title: documenttype
                            _index:
                              type: string
                              example: '44'
                              description: Internal metadata field. This field is for SailPoint internal use only and is subject to change without notice. Do not rely on it in your integrations.
                          title: documentfields
                      title: entitlementdocuments
                    - type: object
                      allOf:
                        - type: object
                          description: Event
                          properties:
                            id:
                              type: string
                              example: 2c91808375d8e80a0175e1f88a575222
                              description: ID of the entitlement.
                            name:
                              type: string
                              example: Add Entitlement Passed
                              description: Name of the entitlement.
                            created:
                              type: string
                              description: ISO-8601 date-time referring to the time when the object was created.
                              nullable: true
                              format: date-time
                              example: '2018-06-25T20:22:28.104Z'
                            synced:
                              type: string
                              description: |-
                                ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.  
                                This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database. 
                                There may be some delay between the `synced` time and the time when the updated data is actually available in the search API. 
                              example: '2018-06-25T20:22:28.104Z'
                            action:
                              type: string
                              description: Name of the event as it's displayed in audit reports.
                              example: AddEntitlement
                            type:
                              type: string
                              description: Event type. Refer to [Event Types](https://documentation.sailpoint.com/saas/help/search/index.html#event-types) for a list of event types and their meanings.
                              example: ACCESS_ITEM
                            actor:
                              type: object
                              properties:
                                name:
                                  type: string
                                  description: Name of the actor that generated the event.
                                  example: System
                            target:
                              type: object
                              properties:
                                name:
                                  type: string
                                  description: Name of the target, or recipient, of the event.
                                  example: Carol.Adams
                            stack:
                              type: string
                              description: The event's stack.
                              example: tpe
                            trackingNumber:
                              type: string
                              description: ID of the group of events.
                              example: 63f891e0735f4cc8bf1968144a1e7440
                            ipAddress:
                              type: string
                              description: Target system's IP address.
                              example: 52.52.97.85
                            details:
                              type: string
                              description: ID of event's details.
                              example: 73b65dfbed1842548c207432a18c84b0
                            attributes:
                              type: object
                              description: Attributes involved in the event.
                              additionalProperties: true
                              example:
                                pod: stg03-useast1
                                org: acme
                                sourceName: SailPoint
                            objects:
                              type: array
                              description: Objects the event is happening to.
                              items:
                                type: string
                                example: AUTHENTICATION
                            operation:
                              type: string
                              description: Operation, or action, performed during the event.
                              example: ADD
                            status:
                              type: string
                              description: Event status. Refer to [Event Statuses](https://documentation.sailpoint.com/saas/help/search/index.html#event-statuses) for a list of event statuses and their meanings.
                              example: PASSED
                            technicalName:
                              type: string
                              description: Event's normalized name. This normalized name always follows the pattern of 'objects_operation_status'.
                              example: ENTITLEMENT_ADD_PASSED
                          title: eventdocument
                        - properties:
                            pod:
                              type: string
                              example: pod01-useast1
                            org:
                              type: string
                              example: org-name
                            _type:
                              description: |-
                                Enum representing the currently supported document types.

                                Additional values may be added in the future without notice.
                              type: string
                              enum:
                                - accessprofile
                                - accountactivity
                                - entitlement
                                - event
                                - identity
                                - role
                              example: identity
                              title: documenttype
                            _index:
                              type: string
                              example: '44'
                              description: Internal metadata field. This field is for SailPoint internal use only and is subject to change without notice. Do not rely on it in your integrations.
                      title: eventdocuments
                    - type: object
                      allOf:
                        - description: Identity
                          allOf:
                            - type: object
                              required:
                                - id
                                - name
                              properties:
                                id:
                                  type: string
                                  example: 2c91808375d8e80a0175e1f88a575222
                                  description: ID of the referenced object.
                                name:
                                  type: string
                                  example: john.doe
                                  description: The human readable name of the referenced object.
                              title: basedocument
                            - allOf:
                                - type: object
                                  properties:
                                    id:
                                      type: string
                                      example: 2c91808568c529c60168cca6f90c1313
                                      description: The unique ID of the referenced object.
                                    name:
                                      type: string
                                      example: John Doe
                                      description: The human readable name of the referenced object.
                                  title: reference
                                - type: object
                                  properties:
                                    displayName:
                                      type: string
                                      example: John Q. Doe
                              title: displayreference
                            - type: object
                              properties:
                                displayName:
                                  type: string
                                  example: Carol.Adams
                                  description: Identity's display name.
                                firstName:
                                  type: string
                                  description: Identity's first name.
                                  example: Carol
                                lastName:
                                  type: string
                                  description: Identity's last name.
                                  example: Adams
                                email:
                                  type: string
                                  description: Identity's primary email address.
                                  example: Carol.Adams@sailpointdemo.com
                                created:
                                  type: string
                                  description: ISO-8601 date-time referring to the time when the object was created.
                                  nullable: true
                                  format: date-time
                                  example: '2018-06-25T20:22:28.104Z'
                                modified:
                                  type: string
                                  description: ISO-8601 date-time referring to the time when the object was last modified.
                                  nullable: true
                                  format: date-time
                                  example: '2018-06-25T20:22:28.104Z'
                                phone:
                                  type: string
                                  description: Identity's phone number.
                                  example: +1 440-527-3672
                                synced:
                                  type: string
                                  description: |-
                                    ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.  
                                    This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database. 
                                    There may be some delay between the `synced` time and the time when the updated data is actually available in the search API. 
                                inactive:
                                  type: boolean
                                  description: Indicates whether the identity is inactive.
                                  default: false
                                  example: false
                                protected:
                                  type: boolean
                                  description: Indicates whether the identity is protected.
                                  default: false
                                  example: false
                                status:
                                  type: string
                                  description: Identity's status in SailPoint.
                                  example: UNREGISTERED
                                employeeNumber:
                                  type: string
                                  description: Identity's employee number.
                                  example: 1a2a3d4e
                                manager:
                                  type: object
                                  description: Identity's manager.
                                  nullable: true
                                  properties:
                                    id:
                                      type: string
                                      description: ID of identity's manager.
                                      example: 2c9180867dfe694b017e208e27c05799
                                    name:
                                      type: string
                                      description: Name of identity's manager.
                                      example: Amanda.Ross
                                    displayName:
                                      type: string
                                      description: Display name of identity's manager.
                                      example: Amanda.Ross
                                isManager:
                                  type: boolean
                                  description: Indicates whether the identity is a manager of other identities.
                                  example: false
                                identityProfile:
                                  type: object
                                  description: Identity's identity profile.
                                  properties:
                                    id:
                                      type: string
                                      description: Identity profile's ID.
                                      example: 3bc8ad26b8664945866b31339d1ff7d2
                                    name:
                                      type: string
                                      description: Identity profile's name.
                                      example: HR Employees
                                source:
                                  type: object
                                  description: Identity's source.
                                  properties:
                                    id:
                                      type: string
                                      description: ID of identity's source.
                                      example: 2c91808b6e9e6fb8016eec1a2b6f7b5f
                                    name:
                                      type: string
                                      description: Display name of identity's source.
                                      example: ODS-HR-Employees
                                attributes:
                                  type: object
                                  description: Map or dictionary of key/value pairs.
                                  additionalProperties: true
                                  example:
                                    country: US
                                    firstname: Carol
                                    cloudStatus: UNREGISTERED
                                disabled:
                                  type: boolean
                                  description: Indicates whether the identity is disabled.
                                  default: false
                                  example: false
                                locked:
                                  type: boolean
                                  description: Indicates whether the identity is locked.
                                  default: false
                                  example: false
                                processingState:
                                  type: string
                                  description: Identity's processing state.
                                  nullable: true
                                  example: ERROR
                                processingDetails:
                                  description: Identity's processing details.
                                  nullable: true
                                  type: object
                                  properties:
                                    date:
                                      type: string
                                      nullable: true
                                      format: date-time
                                      example: '2018-06-25T20:22:28.104Z'
                                      description: A date-time in ISO-8601 format
                                      title: datetime
                                    stage:
                                      type: string
                                      example: In Process
                                    retryCount:
                                      type: integer
                                      example: 0
                                      format: int32
                                    stackTrace:
                                      type: string
                                      example: <stack trace>
                                    message:
                                      type: string
                                      example: <message>
                                  title: processingdetails
                                accounts:
                                  type: array
                                  description: List of accounts associated with the identity.
                                  items:
                                    allOf:
                                      - type: object
                                        properties:
                                          id:
                                            type: string
                                            example: 2c91808568c529c60168cca6f90c1313
                                            description: The unique ID of the referenced object.
                                          name:
                                            type: string
                                            example: John Doe
                                            description: The human readable name of the referenced object.
                                        title: reference
                                      - type: object
                                        properties:
                                          accountId:
                                            type: string
                                            description: Account ID.
                                            example: John.Doe
                                          source:
                                            allOf:
                                              - type: object
                                                properties:
                                                  id:
                                                    type: string
                                                    example: 2c91808568c529c60168cca6f90c1313
                                                    description: The unique ID of the referenced object.
                                                  name:
                                                    type: string
                                                    example: John Doe
                                                    description: The human readable name of the referenced object.
                                                title: reference
                                              - type: object
                                                properties:
                                                  type:
                                                    type: string
                                                    example: Delimited File
                                                    description: Type of source returned.
                                            title: accountsource
                                          disabled:
                                            type: boolean
                                            description: Indicates whether the account is disabled.
                                            default: false
                                            example: false
                                          locked:
                                            type: boolean
                                            description: Indicates whether the account is locked.
                                            default: false
                                            example: false
                                          privileged:
                                            type: boolean
                                            description: Indicates whether the account is privileged.
                                            default: false
                                            example: false
                                          manuallyCorrelated:
                                            type: boolean
                                            description: Indicates whether the account has been manually correlated to an identity.
                                            default: false
                                            example: false
                                          passwordLastSet:
                                            type: string
                                            nullable: true
                                            format: date-time
                                            example: '2018-06-25T20:22:28.104Z'
                                            description: A date-time in ISO-8601 format
                                            title: datetime
                                          entitlementAttributes:
                                            type: object
                                            nullable: true
                                            description: Map or dictionary of key/value pairs.
                                            additionalProperties: true
                                            example:
                                              moderator: true
                                              admin: true
                                              trust_level: '4'
                                          created:
                                            type: string
                                            description: ISO-8601 date-time referring to the time when the object was created.
                                            nullable: true
                                            format: date-time
                                            example: '2018-06-25T20:22:28.104Z'
                                          supportsPasswordChange:
                                            type: boolean
                                            description: Indicates whether the account supports password change.
                                            default: false
                                            example: false
                                          accountAttributes:
                                            type: object
                                            nullable: true
                                            description: Map or dictionary of key/value pairs.
                                            additionalProperties: true
                                            example:
                                              type: global
                                              admin: true
                                              trust_level: '4'
                                    title: baseaccount
                                accountCount:
                                  type: integer
                                  description: Number of accounts associated with the identity.
                                  format: int32
                                  example: 3
                                apps:
                                  type: array
                                  description: List of applications the identity has access to.
                                  items:
                                    allOf:
                                      - type: object
                                        properties:
                                          id:
                                            type: string
                                            example: 2c91808568c529c60168cca6f90c1313
                                            description: The unique ID of the referenced object.
                                          name:
                                            type: string
                                            example: John Doe
                                            description: The human readable name of the referenced object.
                                        title: reference
                                      - type: object
                                        properties:
                                          source:
                                            type: object
                                            properties:
                                              id:
                                                type: string
                                                example: 2c91808568c529c60168cca6f90c1313
                                                description: The unique ID of the referenced object.
                                              name:
                                                type: string
                                                example: John Doe
                                                description: The human readable name of the referenced object.
                                            title: reference
                                          account:
                                            type: object
                                            properties:
                                              id:
                                                type: string
                                                description: The SailPoint generated unique ID
                                                example: 2c9180837dfe6949017e21f3d8cd6d49
                                              accountId:
                                                type: string
                                                description: The account ID generated by the source
                                                example: CN=Carol Adams,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                                    title: app
                                appCount:
                                  type: integer
                                  format: int32
                                  description: Number of applications the identity has access to.
                                  example: 2
                                access:
                                  type: array
                                  description: List of access items assigned to the identity.
                                  items:
                                    discriminator:
                                      propertyName: type
                                      mapping:
                                        ACCESS_PROFILE:
                                          description: This is a summary representation of an access profile.
                                          allOf:
                                            - allOf:
                                                - allOf:
                                                    - type: object
                                                      properties:
                                                        id:
                                                          type: string
                                                          example: 2c91808568c529c60168cca6f90c1313
                                                          description: The unique ID of the referenced object.
                                                        name:
                                                          type: string
                                                          example: John Doe
                                                          description: The human readable name of the referenced object.
                                                      title: reference
                                                    - type: object
                                                      properties:
                                                        displayName:
                                                          type: string
                                                          example: John Q. Doe
                                                  title: displayreference
                                                - type: object
                                                  properties:
                                                    description:
                                                      description: Description of access item.
                                                      type: string
                                                      nullable: true
                                                      example: null
                                              title: access
                                            - type: object
                                              properties:
                                                type:
                                                  type: string
                                                  description: Type of the access item.
                                                  example: ACCESS_PROFILE
                                                source:
                                                  type: object
                                                  properties:
                                                    id:
                                                      type: string
                                                      example: 2c91808568c529c60168cca6f90c1313
                                                      description: The unique ID of the referenced object.
                                                    name:
                                                      type: string
                                                      example: John Doe
                                                      description: The human readable name of the referenced object.
                                                  title: reference
                                                owner:
                                                  allOf:
                                                    - type: object
                                                      properties:
                                                        id:
                                                          type: string
                                                          example: 2c91808568c529c60168cca6f90c1313
                                                          description: The unique ID of the referenced object.
                                                        name:
                                                          type: string
                                                          example: John Doe
                                                          description: The human readable name of the referenced object.
                                                      title: reference
                                                    - type: object
                                                      properties:
                                                        displayName:
                                                          type: string
                                                          example: John Q. Doe
                                                  title: displayreference
                                                revocable:
                                                  type: boolean
                                                  example: true
                                          title: accessprofilesummary
                                        ENTITLEMENT:
                                          description: EntitlementReference
                                          allOf:
                                            - allOf:
                                                - allOf:
                                                    - type: object
                                                      properties:
                                                        id:
                                                          type: string
                                                          example: 2c91808568c529c60168cca6f90c1313
                                                          description: The unique ID of the referenced object.
                                                        name:
                                                          type: string
                                                          example: John Doe
                                                          description: The human readable name of the referenced object.
                                                      title: reference
                                                    - type: object
                                                      properties:
                                                        displayName:
                                                          type: string
                                                          example: John Q. Doe
                                                  title: displayreference
                                                - type: object
                                                  properties:
                                                    description:
                                                      description: Description of access item.
                                                      type: string
                                                      nullable: true
                                                      example: null
                                              title: access
                                            - type: object
                                              properties:
                                                source:
                                                  type: object
                                                  properties:
                                                    id:
                                                      type: string
                                                      example: 2c91808568c529c60168cca6f90c1313
                                                      description: The unique ID of the referenced object.
                                                    name:
                                                      type: string
                                                      example: John Doe
                                                      description: The human readable name of the referenced object.
                                                  title: reference
                                                type:
                                                  type: string
                                                  description: Type of the access item.
                                                  example: ENTITLEMENT
                                                privileged:
                                                  type: boolean
                                                  example: false
                                                attribute:
                                                  type: string
                                                  example: memberOf
                                                value:
                                                  type: string
                                                  example: CN=Buyer,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                                                standalone:
                                                  type: boolean
                                                  example: false
                                          title: accessprofileentitlement
                                        ROLE:
                                          description: Role
                                          allOf:
                                            - allOf:
                                                - allOf:
                                                    - type: object
                                                      properties:
                                                        id:
                                                          type: string
                                                          example: 2c91808568c529c60168cca6f90c1313
                                                          description: The unique ID of the referenced object.
                                                        name:
                                                          type: string
                                                          example: John Doe
                                                          description: The human readable name of the referenced object.
                                                      title: reference
                                                    - type: object
                                                      properties:
                                                        displayName:
                                                          type: string
                                                          example: John Q. Doe
                                                  title: displayreference
                                                - type: object
                                                  properties:
                                                    description:
                                                      description: Description of access item.
                                                      type: string
                                                      nullable: true
                                                      example: null
                                              title: access
                                            - type: object
                                              properties:
                                                type:
                                                  type: string
                                                  description: Type of the access item.
                                                  example: ROLE
                                                owner:
                                                  allOf:
                                                    - type: object
                                                      properties:
                                                        id:
                                                          type: string
                                                          example: 2c91808568c529c60168cca6f90c1313
                                                          description: The unique ID of the referenced object.
                                                        name:
                                                          type: string
                                                          example: John Doe
                                                          description: The human readable name of the referenced object.
                                                      title: reference
                                                    - type: object
                                                      properties:
                                                        displayName:
                                                          type: string
                                                          example: John Q. Doe
                                                  title: displayreference
                                                disabled:
                                                  type: boolean
                                                revocable:
                                                  type: boolean
                                          title: accessprofilerole
                                    oneOf:
                                      - description: This is a summary representation of an access profile.
                                        allOf:
                                          - allOf:
                                              - allOf:
                                                  - type: object
                                                    properties:
                                                      id:
                                                        type: string
                                                        example: 2c91808568c529c60168cca6f90c1313
                                                        description: The unique ID of the referenced object.
                                                      name:
                                                        type: string
                                                        example: John Doe
                                                        description: The human readable name of the referenced object.
                                                    title: reference
                                                  - type: object
                                                    properties:
                                                      displayName:
                                                        type: string
                                                        example: John Q. Doe
                                                title: displayreference
                                              - type: object
                                                properties:
                                                  description:
                                                    description: Description of access item.
                                                    type: string
                                                    nullable: true
                                                    example: null
                                            title: access
                                          - type: object
                                            properties:
                                              type:
                                                type: string
                                                description: Type of the access item.
                                                example: ACCESS_PROFILE
                                              source:
                                                type: object
                                                properties:
                                                  id:
                                                    type: string
                                                    example: 2c91808568c529c60168cca6f90c1313
                                                    description: The unique ID of the referenced object.
                                                  name:
                                                    type: string
                                                    example: John Doe
                                                    description: The human readable name of the referenced object.
                                                title: reference
                                              owner:
                                                allOf:
                                                  - type: object
                                                    properties:
                                                      id:
                                                        type: string
                                                        example: 2c91808568c529c60168cca6f90c1313
                                                        description: The unique ID of the referenced object.
                                                      name:
                                                        type: string
                                                        example: John Doe
                                                        description: The human readable name of the referenced object.
                                                    title: reference
                                                  - type: object
                                                    properties:
                                                      displayName:
                                                        type: string
                                                        example: John Q. Doe
                                                title: displayreference
                                              revocable:
                                                type: boolean
                                                example: true
                                        title: accessprofilesummary
                                      - description: EntitlementReference
                                        allOf:
                                          - allOf:
                                              - allOf:
                                                  - type: object
                                                    properties:
                                                      id:
                                                        type: string
                                                        example: 2c91808568c529c60168cca6f90c1313
                                                        description: The unique ID of the referenced object.
                                                      name:
                                                        type: string
                                                        example: John Doe
                                                        description: The human readable name of the referenced object.
                                                    title: reference
                                                  - type: object
                                                    properties:
                                                      displayName:
                                                        type: string
                                                        example: John Q. Doe
                                                title: displayreference
                                              - type: object
                                                properties:
                                                  description:
                                                    description: Description of access item.
                                                    type: string
                                                    nullable: true
                                                    example: null
                                            title: access
                                          - type: object
                                            properties:
                                              source:
                                                type: object
                                                properties:
                                                  id:
                                                    type: string
                                                    example: 2c91808568c529c60168cca6f90c1313
                                                    description: The unique ID of the referenced object.
                                                  name:
                                                    type: string
                                                    example: John Doe
                                                    description: The human readable name of the referenced object.
                                                title: reference
                                              type:
                                                type: string
                                                description: Type of the access item.
                                                example: ENTITLEMENT
                                              privileged:
                                                type: boolean
                                                example: false
                                              attribute:
                                                type: string
                                                example: memberOf
                                              value:
                                                type: string
                                                example: CN=Buyer,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                                              standalone:
                                                type: boolean
                                                example: false
                                        title: accessprofileentitlement
                                      - description: Role
                                        allOf:
                                          - allOf:
                                              - allOf:
                                                  - type: object
                                                    properties:
                                                      id:
                                                        type: string
                                                        example: 2c91808568c529c60168cca6f90c1313
                                                        description: The unique ID of the referenced object.
                                                      name:
                                                        type: string
                                                        example: John Doe
                                                        description: The human readable name of the referenced object.
                                                    title: reference
                                                  - type: object
                                                    properties:
                                                      displayName:
                                                        type: string
                                                        example: John Q. Doe
                                                title: displayreference
                                              - type: object
                                                properties:
                                                  description:
                                                    description: Description of access item.
                                                    type: string
                                                    nullable: true
                                                    example: null
                                            title: access
                                          - type: object
                                            properties:
                                              type:
                                                type: string
                                                description: Type of the access item.
                                                example: ROLE
                                              owner:
                                                allOf:
                                                  - type: object
                                                    properties:
                                                      id:
                                                        type: string
                                                        example: 2c91808568c529c60168cca6f90c1313
                                                        description: The unique ID of the referenced object.
                                                      name:
                                                        type: string
                                                        example: John Doe
                                                        description: The human readable name of the referenced object.
                                                    title: reference
                                                  - type: object
                                                    properties:
                                                      displayName:
                                                        type: string
                                                        example: John Q. Doe
                                                title: displayreference
                                              disabled:
                                                type: boolean
                                              revocable:
                                                type: boolean
                                        title: accessprofilerole
                                    title: identityaccess
                                accessCount:
                                  type: integer
                                  format: int32
                                  description: Number of access items assigned to the identity.
                                  example: 5
                                entitlementCount:
                                  type: integer
                                  format: int32
                                  description: Number of entitlements assigned to the identity.
                                  example: 10
                                roleCount:
                                  type: integer
                                  format: int32
                                  description: Number of roles assigned to the identity.
                                  example: 1
                                accessProfileCount:
                                  type: integer
                                  format: int32
                                  description: Number of access profiles assigned to the identity.
                                  example: 1
                                owns:
                                  type: array
                                  description: Access items the identity owns.
                                  items:
                                    type: object
                                    properties:
                                      sources:
                                        type: array
                                        items:
                                          type: object
                                          properties:
                                            id:
                                              type: string
                                              example: 2c91808568c529c60168cca6f90c1313
                                              description: The unique ID of the referenced object.
                                            name:
                                              type: string
                                              example: John Doe
                                              description: The human readable name of the referenced object.
                                          title: reference
                                      entitlements:
                                        type: array
                                        items:
                                          type: object
                                          properties:
                                            id:
                                              type: string
                                              example: 2c91808568c529c60168cca6f90c1313
                                              description: The unique ID of the referenced object.
                                            name:
                                              type: string
                                              example: John Doe
                                              description: The human readable name of the referenced object.
                                          title: reference
                                      accessProfiles:
                                        type: array
                                        items:
                                          type: object
                                          properties:
                                            id:
                                              type: string
                                              example: 2c91808568c529c60168cca6f90c1313
                                              description: The unique ID of the referenced object.
                                            name:
                                              type: string
                                              example: John Doe
                                              description: The human readable name of the referenced object.
                                          title: reference
                                      roles:
                                        type: array
                                        items:
                                          type: object
                                          properties:
                                            id:
                                              type: string
                                              example: 2c91808568c529c60168cca6f90c1313
                                              description: The unique ID of the referenced object.
                                            name:
                                              type: string
                                              example: John Doe
                                              description: The human readable name of the referenced object.
                                          title: reference
                                      apps:
                                        type: array
                                        items:
                                          type: object
                                          properties:
                                            id:
                                              type: string
                                              example: 2c91808568c529c60168cca6f90c1313
                                              description: The unique ID of the referenced object.
                                            name:
                                              type: string
                                              example: John Doe
                                              description: The human readable name of the referenced object.
                                          title: reference
                                      governanceGroups:
                                        type: array
                                        items:
                                          type: object
                                          properties:
                                            id:
                                              type: string
                                              example: 2c91808568c529c60168cca6f90c1313
                                              description: The unique ID of the referenced object.
                                            name:
                                              type: string
                                              example: John Doe
                                              description: The human readable name of the referenced object.
                                          title: reference
                                      fallbackApprover:
                                        type: boolean
                                        example: false
                                    title: owns
                                ownsCount:
                                  type: integer
                                  format: int32
                                  description: Number of access items the identity owns.
                                  example: 5
                                tags:
                                  type: array
                                  description: Tags that have been applied to the object.
                                  items:
                                    type: string
                                  example:
                                    - TAG_1
                                    - TAG_2
                                  title: tags
                                tagsCount:
                                  type: integer
                                  format: int32
                                  description: Number of tags on the identity.
                                visibleSegments:
                                  type: array
                                  description: List of segments that the identity is in.
                                  items:
                                    type: string
                                  nullable: true
                                  example:
                                    - All Employees
                                visibleSegmentCount:
                                  type: integer
                                  format: int32
                                  description: Number of segments the identity is in.
                                  example: 1
                          title: identitydocument
                        - type: object
                          properties:
                            pod:
                              type: string
                              example: pod01-useast1
                              description: Name of the pod.
                            org:
                              type: string
                              example: org-name
                              description: Name of the tenant.
                            _type:
                              description: |-
                                Enum representing the currently supported document types.

                                Additional values may be added in the future without notice.
                              type: string
                              enum:
                                - accessprofile
                                - accountactivity
                                - entitlement
                                - event
                                - identity
                                - role
                              example: identity
                              title: documenttype
                            type:
                              description: |-
                                Enum representing the currently supported document types.

                                Additional values may be added in the future without notice.
                              type: string
                              enum:
                                - accessprofile
                                - accountactivity
                                - entitlement
                                - event
                                - identity
                                - role
                              example: identity
                              title: documenttype
                            _index:
                              type: string
                              example: '44'
                              description: Internal metadata field. This field is for SailPoint internal use only and is subject to change without notice. Do not rely on it in your integrations.
                          title: documentfields
                      title: identitydocuments
                    - type: object
                      allOf:
                        - description: Role
                          allOf:
                            - type: object
                              properties:
                                description:
                                  type: string
                                  description: Access item's description.
                                  example: Admin access
                                created:
                                  type: string
                                  description: ISO-8601 date-time referring to the time when the object was created.
                                  nullable: true
                                  format: date-time
                                  example: '2018-06-25T20:22:28.104Z'
                                modified:
                                  type: string
                                  description: ISO-8601 date-time referring to the time when the object was last modified.
                                  nullable: true
                                  format: date-time
                                  example: '2018-06-25T20:22:28.104Z'
                                synced:
                                  type: string
                                  description: |-
                                    ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.  
                                    This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database. 
                                    There may be some delay between the `synced` time and the time when the updated data is actually available in the search API. 
                                  nullable: true
                                  format: date-time
                                  example: '2018-06-25T20:22:33.104Z'
                                enabled:
                                  type: boolean
                                  description: Indicates whether the access item is currently enabled.
                                  default: false
                                  example: true
                                requestable:
                                  type: boolean
                                  description: Indicates whether the access item can be requested.
                                  default: true
                                  example: true
                                requestCommentsRequired:
                                  type: boolean
                                  description: Indicates whether comments are required for requests to access the item.
                                  default: false
                                  example: false
                                owner:
                                  type: object
                                  description: Owner's identity.
                                  properties:
                                    type:
                                      type: string
                                      description: Owner's DTO type.
                                      enum:
                                        - IDENTITY
                                      example: IDENTITY
                                    id:
                                      type: string
                                      description: Owner's identity ID.
                                      example: 2c9180a46faadee4016fb4e018c20639
                                    name:
                                      type: string
                                      description: Owner's display name.
                                      example: Support
                                    email:
                                      type: string
                                      description: Owner's email.
                                      example: cloud-support@sailpoint.com
                              title: baseaccess
                            - type: object
                              required:
                                - id
                                - name
                              properties:
                                id:
                                  type: string
                                  example: 2c91808375d8e80a0175e1f88a575222
                                  description: ID of the role.
                                name:
                                  type: string
                                  example: Branch Manager Access
                                  description: Name of the role.
                                accessProfiles:
                                  type: array
                                  description: Access profiles included with the role.
                                  nullable: true
                                  items:
                                    type: object
                                    properties:
                                      id:
                                        type: string
                                        example: 2c91809c6faade77016fb4f0b63407ae
                                        description: Access profile's unique ID.
                                      name:
                                        type: string
                                        example: Admin Access
                                        description: Access profile's display name.
                                    title: baseaccessprofile
                                accessProfileCount:
                                  type: integer
                                  description: Number of access profiles included with the role.
                                  nullable: true
                                  format: int32
                                  example: 1
                                tags:
                                  type: array
                                  description: Tags that have been applied to the object.
                                  items:
                                    type: string
                                  example:
                                    - TAG_1
                                    - TAG_2
                                  title: tags
                                  nullable: true
                                segments:
                                  type: array
                                  description: Segments with the role.
                                  nullable: true
                                  items:
                                    type: object
                                    properties:
                                      id:
                                        type: string
                                        example: b009b6e3-b56d-41d9-8735-cb532ea0b017
                                        description: Segment's unique ID.
                                      name:
                                        type: string
                                        example: Test Segment
                                        description: Segment's display name.
                                    title: basesegment
                                segmentCount:
                                  type: integer
                                  description: Number of segments with the role.
                                  nullable: true
                                  format: int32
                                  example: 1
                                entitlements:
                                  type: array
                                  description: Entitlements included with the role.
                                  nullable: true
                                  items:
                                    allOf:
                                      - type: object
                                        properties:
                                          hasPermissions:
                                            type: boolean
                                            description: Indicates whether the entitlement has permissions.
                                            default: false
                                            example: false
                                          description:
                                            type: string
                                            description: Entitlement's description.
                                            nullable: true
                                            example: Cloud engineering
                                          attribute:
                                            type: string
                                            description: Entitlement attribute's name.
                                            example: memberOf
                                          value:
                                            type: string
                                            description: Entitlement's value.
                                            example: CN=Cloud Engineering,DC=sailpoint,DC=COM
                                          schema:
                                            type: string
                                            description: Entitlement's schema.
                                            example: group
                                          privileged:
                                            type: boolean
                                            description: Indicates whether the entitlement is privileged.
                                            default: false
                                            example: false
                                          id:
                                            type: string
                                            description: Entitlement's ID.
                                            example: 2c918084575812550157589064f33b89
                                          name:
                                            type: string
                                            description: Entitlement's name.
                                            example: CN=Cloud Engineering,DC=sailpoint,DC=COM
                                        title: baseentitlement
                                      - properties:
                                          sourceSchemaObjectType:
                                            type: string
                                            description: Schema objectType.
                                            example: group
                                          hash:
                                            type: string
                                            description: Read-only calculated hash value of an entitlement.
                                            example: c6fab95235584cca98a454a2f51e5683bc77d6a0
                                entitlementCount:
                                  type: integer
                                  description: Number of entitlements included with the role.
                                  nullable: true
                                  format: int32
                                  example: 3
                                dimensional:
                                  type: boolean
                                  example: false
                                  default: false
                                dimensionSchemaAttributeCount:
                                  type: integer
                                  description: Number of dimension attributes included with the role.
                                  nullable: true
                                  format: int32
                                  example: 3
                                dimensionSchemaAttributes:
                                  type: array
                                  description: Dimension attributes included with the role.
                                  nullable: true
                                  items:
                                    type: object
                                    properties:
                                      derived:
                                        type: boolean
                                        example: true
                                        default: true
                                      displayName:
                                        type: string
                                        description: Displayname of the dimension attribute.
                                        example: Department
                                      name:
                                        type: string
                                        description: Name of the dimension attribute.
                                        example: department
                                dimensions:
                                  type: array
                                  nullable: true
                                  items:
                                    type: object
                                    properties:
                                      id:
                                        type: string
                                        description: Unique ID of the dimension.
                                        example: b3c28992ba964a40a7598978139d1ced
                                      name:
                                        type: string
                                        description: Name of the dimension.
                                        example: Manager Austin Branch
                                      description:
                                        type: string
                                        nullable: true
                                        description: Description of the dimension.
                                        example: Managers located at the Austin branch
                                      entitlements:
                                        type: array
                                        description: Entitlements included with the role.
                                        nullable: true
                                        items:
                                          allOf:
                                            - type: object
                                              properties:
                                                hasPermissions:
                                                  type: boolean
                                                  description: Indicates whether the entitlement has permissions.
                                                  default: false
                                                  example: false
                                                description:
                                                  type: string
                                                  description: Entitlement's description.
                                                  nullable: true
                                                  example: Cloud engineering
                                                attribute:
                                                  type: string
                                                  description: Entitlement attribute's name.
                                                  example: memberOf
                                                value:
                                                  type: string
                                                  description: Entitlement's value.
                                                  example: CN=Cloud Engineering,DC=sailpoint,DC=COM
                                                schema:
                                                  type: string
                                                  description: Entitlement's schema.
                                                  example: group
                                                privileged:
                                                  type: boolean
                                                  description: Indicates whether the entitlement is privileged.
                                                  default: false
                                                  example: false
                                                id:
                                                  type: string
                                                  description: Entitlement's ID.
                                                  example: 2c918084575812550157589064f33b89
                                                name:
                                                  type: string
                                                  description: Entitlement's name.
                                                  example: CN=Cloud Engineering,DC=sailpoint,DC=COM
                                              title: baseentitlement
                                            - properties:
                                                sourceSchemaObjectType:
                                                  type: string
                                                  description: Schema objectType.
                                                  example: group
                                                hash:
                                                  type: string
                                                  description: Read-only calculated hash value of an entitlement.
                                                  example: c6fab95235584cca98a454a2f51e5683bc77d6a0
                                      accessProfiles:
                                        type: array
                                        nullable: true
                                        description: Access profiles included in the dimension.
                                        items:
                                          type: object
                                          properties:
                                            id:
                                              type: string
                                              example: 2c91809c6faade77016fb4f0b63407ae
                                              description: Access profile's unique ID.
                                            name:
                                              type: string
                                              example: Admin Access
                                              description: Access profile's display name.
                                          title: baseaccessprofile
                          title: roledocument
                        - type: object
                          properties:
                            pod:
                              type: string
                              example: pod01-useast1
                              description: Name of the pod.
                            org:
                              type: string
                              example: org-name
                              description: Name of the tenant.
                            _type:
                              description: |-
                                Enum representing the currently supported document types.

                                Additional values may be added in the future without notice.
                              type: string
                              enum:
                                - accessprofile
                                - accountactivity
                                - entitlement
                                - event
                                - identity
                                - role
                              example: identity
                              title: documenttype
                            type:
                              description: |-
                                Enum representing the currently supported document types.

                                Additional values may be added in the future without notice.
                              type: string
                              enum:
                                - accessprofile
                                - accountactivity
                                - entitlement
                                - event
                                - identity
                                - role
                              example: identity
                              title: documenttype
                            _index:
                              type: string
                              example: '44'
                              description: Internal metadata field. This field is for SailPoint internal use only and is subject to change without notice. Do not rely on it in your integrations.
                          title: documentfields
                      title: roledocuments
                  title: searchdocuments
              examples:
                accessProfiles:
                  summary: A collection of access profiles
                  value:
                    - id: 13b856dd9a264206954b63ecbb57a853
                      name: Cloud Eng
                      description: Cloud Eng
                      source:
                        id: 5c71ff71195b4794a0b87e7cf36fb017
                        name: Active Directory
                      entitlements:
                        - hasPermissions: false
                          attribute: memberOf
                          value: CN=Cloud Engineering,DC=sailpoint,DC=com
                          schema: group
                          privileged: false
                          id: 7372eaddd75749bd89a2e76a363eb891
                          name: Cloud Engineering
                          description: Cloud Engineering
                      entitlementCount: 1
                      segments: []
                      segmentCount: 0
                      apps: []
                      created: '2024-09-16T17:41:25Z'
                      modified: '2024-09-16T19:30:54Z'
                      synced: '2025-02-12T06:32:40.156Z'
                      enabled: true
                      requestable: true
                      requestCommentsRequired: false
                      owner:
                        id: ff8081815757d36a015757d42e56031e
                        name: SailPoint Support
                        type: IDENTITY
                        email: cloud-support@sailpoint.com
                      tags:
                        - TAG_1
                        - TAG_2
                      _type: accessprofile
                      type: accessprofile
                      pod: pod01-useast1
                      org: org-name
                accountActivities:
                  summary: A collection of account activities
                  value:
                    - id: 6f76c3add1db4ba8bbe0d42aaceb7a07
                      _type: accountactivity
                      type: accountactivity
                      requester:
                        name: Amos.Cunningham
                        id: ef1e2a36099447cb9448c68e1804dd9f
                        type: Identity
                      sources: Active Directory
                      created: '2025-01-02T21:45:59.795Z'
                      accountRequests:
                        - result:
                            status: committed
                          accountId: CN=Amos Cunningham,OU=Sales,OU=AI,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                          op: Modify
                          provisioningTarget:
                            name: Active Directory
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            type: ADLDAPConnector
                          source:
                            name: Active Directory
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            type: ADLDAPConnector
                          attributeRequests:
                            - op: Add
                              name: memberOf
                              value: CN=HelpDesk,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                      stage: Completed
                      originalRequests:
                        - result:
                            status: Manual Task Created
                          accountId: CN=Amos Cunningham,OU=Sales,OU=AI,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                          op: Modify
                          accountUuid: '{17413e85-1c08-4bb0-b658-9afdaad11d0a}'
                          source:
                            name: Active Directory
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            type: ADLDAPConnector
                          attributeRequests:
                            - op: Add
                              name: memberOf
                              value: CN=HelpDesk,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                      expansionItems: []
                      approvals:
                        - owner:
                            name: tina.smith
                            id: 322c6bce405a495a8e841a014b7d8410
                            type: Identity
                          result: Finished
                          attributeRequest:
                            op: Add
                            name: memberOf
                            value:
                              - CN=HelpDesk,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                          accountUuid: '{17413e85-1c08-4bb0-b658-9afdaad11d0a}'
                          modified: '2025-01-02T21:47:16.903Z'
                          source:
                            name: Active Directory
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            type: ADLDAPConnector
                      recipient:
                        name: Amos.Cunningham
                        id: ef1e2a36099447cb9448c68e1804dd9f
                        type: Identity
                      action: Access Request
                      modified: '2025-01-02T21:47:16.903Z'
                      trackingNumber: 051d09b0bb5b453d91f658ba7f1e3171
                      status: Complete
                      pod: pod01-useast1
                      org: org-name
                      synced: '2025-01-02T21:47:16.953Z'
                entitlements:
                  summary: A collection of entitlements
                  value:
                    - id: 2c9180867dde18d1017de8ea1f5c130f
                      name: Vendor Creation
                      displayName: Vendor Creation
                      created: '2021-12-23T20:09:57.340Z'
                      modified: '2023-05-02T06:31:19.357Z'
                      attribute: groups
                      value: VC
                      sourceSchemaObjectType: group
                      schema: group
                      privileged: false
                      cloudGoverned: false
                      hash: 22ac1f7a13c8a462c67ee74f5fcbf06a277cce50
                      description: Set up new AP vendors
                      requestable: false
                      source:
                        id: 2c9180887de347a7017de8e75fa5570a
                        type: SOURCE
                        name: Finance
                      containsDataAccess: 'false'
                      pod: pod01-useast1
                      org: org-name
                      synced: '2024-11-07T16:29:06.131Z'
                      _type: entitlement
                      type: entitlement
                events:
                  summary: A collection of events
                  value:
                    - id: 001909ce8cc3b519436197105426b18b5fc6ca179803c0c3702e9038107bec78
                      stack: wps
                      synced: '2023-06-01T22:01:38.170Z'
                      created: '2023-06-01T22:01:37.818Z'
                      objects:
                        - ACCOUNT
                      type: PROVISIONING
                      technicalName: ACCOUNT_MODIFY_PASSED
                      target:
                        name: Colt.Spears
                      actor:
                        name: System
                      name: Modify Account Passed
                      action: ModifyAccount
                      attributes:
                        accountUuid: '{2d1ec18a-84cc-4659-bf75-a1ce4d56a9c5}'
                        cloudAppName: Active Directory
                        appId: 5c71ff71195b4794a0b87e7cf36fb017
                        sourceId: source
                        sourceName: Active Directory
                        accountName: CN=Colt Spears,OU=Sales,OU=AI,OU=Demo,DC=seri,DC=sailpoint,DC=com
                        interface: Identity Refresh
                      trackingNumber: 1f74901adbc0412d9fa51314195155be
                      operation: MODIFY
                      status: PASSED
                      pod: pod01-useast1
                      org: org-name
                      _type: event
                identities:
                  summary: A collection of identities
                  value:
                    - id: 2c9180865c45e7e3015c46c434a80622
                      name: Laura Peeters
                      firstName: Laura
                      lastName: Peeters
                      displayName: Laura Peeters
                      email: Laura.Peeters@sailpointdemo.com
                      created: '2024-04-04T21:36:00.385Z'
                      inactive: false
                      protected: false
                      status: ACTIVE
                      employeeNumber: '10673'
                      manager:
                        id: 88e405b1a3b8439daf2efc8f4ff0a98b
                        name: Mia Garcia
                        displayName: Mia Garcia
                      isManager: true
                      identityProfile:
                        id: 00a2bc6244b34f4a88d985f035f2b68b
                        name: HR Global
                      source:
                        id: 524f8d986f9b4192865269516d169eb0
                        name: HR Global
                      attributes:
                        city: Brussels
                        cloudAuthoritativeSource: 524f8d986f9b4192865269516d169eb0
                        cloudLifecycleState: active
                        cloudStatus: ACTIVE
                        country: BE
                        department: EMEA Sales
                        displayName: Laura Peeters
                        email: Laura.Peeters@sailpointdemo.com
                        firstname: Laura
                        identificationNumber: '10673'
                        identityState: ACTIVE
                        internalCloudStatus: ACTIVE
                        jobTitle: Manager,  Sales - Belgium
                        lastname: Peeters
                        location: EMEA
                        uid: '10673'
                        visibleSegments:
                          - d75ae486-044b-4eba-8113-0cdacb5341df
                      disabled: false
                      locked: false
                      accounts:
                        - id: 830396e8863442f1bce7b485612c8b51
                          name: Laura Peeters
                          accountId: '10673'
                          source:
                            id: 524f8d986f9b4192865269516d169eb0
                            name: HR Global
                            type: DelimitedFile
                          disabled: false
                          locked: false
                          privileged: false
                          manuallyCorrelated: false
                          entitlementAttributes: {}
                          created: '2024-04-04T21:36:00.385Z'
                          supportsPasswordChange: false
                        - id: cd6797419f37492ba22ea991f9d6ba90
                          name: $SEK300-N3K0K4HOPEB6
                          accountId: CN=Laura Peeters,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                            type: Active Directory - Direct
                          disabled: false
                          locked: false
                          privileged: false
                          manuallyCorrelated: true
                          passwordLastSet: '2024-04-04T21:38:57.434Z'
                          entitlementAttributes:
                            memberOf:
                              - CN=Salesforce Access,OU=Sales,OU=AI,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                              - CN=Sales-Folder,OU=Sales,OU=AI,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                              - CN=Benefits,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                              - CN=Salesforce opportunity management,OU=Sales,OU=AI,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                          created: '2024-04-04T21:42:26.787Z'
                          supportsPasswordChange: true
                        - id: db145fd0ec6a4e0cbc3a24bbe0758c8f
                          name: Laura Peeters
                          accountId: '10681'
                          source:
                            id: 524f8d986f9b4192865269516d169eb0
                            name: HR Global
                            type: DelimitedFile
                          disabled: false
                          locked: false
                          privileged: false
                          manuallyCorrelated: false
                          entitlementAttributes: {}
                          created: '2024-04-04T21:36:15.769Z'
                          supportsPasswordChange: false
                        - id: 6b75898eec394b4c98a5c3d2d9ba311b
                          name: Laura Peeters
                          accountId: Laura Peeters
                          source:
                            id: af4686d6482841ac96d793901372ad9b
                            name: IdentityNow
                            type: IdentityNowConnector
                          disabled: false
                          locked: false
                          privileged: false
                          manuallyCorrelated: false
                          entitlementAttributes: {}
                          created: '2024-04-04T21:36:15.809Z'
                          supportsPasswordChange: true
                          accountAttributes: {}
                      accountCount: 3
                      apps:
                        - id: '20003'
                          name: Active Directory
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          account:
                            id: cd6797419f37492ba22ea991f9d6ba90
                            accountId: CN=Laura Peeters,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        - id: '20013'
                          name: AD test
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          account:
                            id: cd6797419f37492ba22ea991f9d6ba90
                            accountId: CN=Laura Peeters,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        - id: '20014'
                          name: Test AD
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          account:
                            id: cd6797419f37492ba22ea991f9d6ba90
                            accountId: CN=Laura Peeters,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        - id: '5092'
                          name: Accounting
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          account:
                            id: cd6797419f37492ba22ea991f9d6ba90
                            accountId: CN=Laura Peeters,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        - id: '5822114389092541705'
                          name: IdentityNow app
                          source:
                            id: af4686d6482841ac96d793901372ad9b
                            name: IdentityNow
                          account:
                            id: 6b75898eec394b4c98a5c3d2d9ba311b
                            accountId: Laura Peeters
                      appCount: 5
                      access:
                        - id: 4919721c3c1a4ca484469b85f0fd9ba1
                          name: Benefits
                          displayName: Benefits
                          type: ENTITLEMENT
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          disabled: false
                          privileged: false
                          attribute: memberOf
                          value: CN=Benefits,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                          standalone: false
                          cloudEligible: false
                          cloudGoverned: false
                          schema: group
                        - id: 4bf8f57887874e9c83ae3a662bf8988c
                          name: Sales-Folder
                          displayName: Sales-Folder
                          type: ENTITLEMENT
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          disabled: false
                          privileged: false
                          attribute: memberOf
                          value: CN=Sales-Folder,OU=Sales,OU=AI,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                          standalone: false
                          cloudEligible: false
                          cloudGoverned: false
                          schema: group
                        - id: f1bea520cace4489805d26de3463262d
                          name: Salesforce Access
                          displayName: Salesforce Access
                          type: ENTITLEMENT
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          disabled: false
                          privileged: false
                          attribute: memberOf
                          value: CN=Salesforce Access,OU=Sales,OU=AI,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                          standalone: false
                          cloudEligible: false
                          cloudGoverned: false
                          schema: group
                        - id: 98a76b26b7884f3e8d115991cebc09b2
                          name: Salesforce opportunity management
                          displayName: Salesforce opportunity management
                          type: ENTITLEMENT
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          disabled: false
                          privileged: false
                          attribute: memberOf
                          value: CN=Salesforce opportunity management,OU=Sales,OU=AI,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                          standalone: false
                          cloudEligible: false
                          cloudGoverned: false
                          schema: group
                        - id: 7e277d102c874560becc464cdfe33a86
                          name: Benefits Employees
                          displayName: Benefits Employees
                          type: ACCESS_PROFILE
                          description: Access for Benefits Employees. Distribution group and File share access.
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          owner:
                            id: 278f8a1859df48d2a0adb204257b26a2
                            name: Jerry.Bennett
                            displayName: Jerry.Bennett
                          disabled: false
                          privileged: false
                          standalone: false
                          revocable: false
                          cloudEligible: false
                          cloudGoverned: false
                        - id: 468171f0af874adebb58d3718519bd56
                          name: SalesCommonAccess
                          displayName: SalesCommonAccess
                          type: ACCESS_PROFILE
                          description: Grants basic access for everyone in the sale department
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          owner:
                            id: 278f8a1859df48d2a0adb204257b26a2
                            name: Jerry.Bennett
                            displayName: Jerry.Bennett
                          disabled: false
                          privileged: false
                          standalone: false
                          revocable: false
                          cloudEligible: false
                          cloudGoverned: false
                        - id: ad7025c956734455b28fa35e315e77fe
                          name: Benefits Common Access
                          displayName: Benefits Common Access
                          type: ROLE
                          description: Testing AD provisioning with birthright access
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          owner:
                            id: 322c6bce405a495a8e841a014b7d8410
                            name: tina.smith
                            displayName: tina.smith
                          disabled: false
                          privileged: false
                          standalone: false
                          revocable: false
                          cloudEligible: false
                          cloudGoverned: false
                        - id: a8819cb0445541438fe08dd38f311b3c
                          name: SalesGlobal
                          displayName: SalesGlobal
                          type: ROLE
                          description: All Sales people in the company
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          owner:
                            id: 29b6ee3f91484d159b1ceac3109af151
                            name: se.admin
                            displayName: se.admin
                          disabled: false
                          privileged: false
                          standalone: false
                          revocable: false
                          cloudEligible: false
                          cloudGoverned: false
                      accessCount: 8
                      accessProfileCount: 2
                      entitlementCount: 4
                      roleCount: 2
                      modified: '2025-01-17T03:17:17.895Z'
                      visibleSegments:
                        - All Employees
                      visibleSegmentCount: 1
                      tagCount: 2
                      tags:
                        - TAG_1
                        - TAG_2
                      pod: pod01-useast1
                      org: org-name
                      synced: '2025-01-17T06:10:19.853Z'
                      _type: identity
                      type: identity
                roles:
                  summary: A collection of roles
                  value:
                    - id: 2c91808c6faadea6016fb4f2bc69077b
                      accessProfileCount: 1
                      accessProfiles:
                        - id: 468171f0af874adebb58d3718519bd56
                          name: SalesCommonAccess
                      created: '2023-06-01T22:00:55.311Z'
                      description: All Sales people in the company
                      dimensional: false
                      enabled: true
                      modified: '2023-06-01T22:00:55.432Z'
                      name: SalesGlobal
                      owner:
                        email: admin@sailpointdemo.com
                        id: c18630c4811c4030810afb3a14f388cf
                        name: admin
                        type: IDENTITY
                      requestCommentsRequired: false
                      requestable: true
                      tags:
                        - TAG_1
                        - TAG_2
                      pod: pod01-useast1
                      org: org-name
                      _type: role
                      type: role
                query-fields:
                  summary: Query with fields
                  value:
                    - name: John Doe
                      firstName: John
                      lastName: Doe
                      displayName: John Doe
                      id: 655f6741762547ec937893f27eab0cec
                      email: John.Doe@sailpointdemo.com
                      created: '2025-01-03T22:36:20.025Z'
                      inactive: false
                      protected: false
                      status: UNREGISTERED
                      isManager: false
                      identityProfile:
                        id: 63e42f96f2fc4b8ba544654eba6068cf
                        name: Contractors
                      source:
                        id: b33c36dbaf974200b4d91f846abc30a5
                        name: Contractors
                      attributes:
                        cloudAuthoritativeSource: b33c36dbaf974200b4d91f846abc30a5
                        cloudLifecycleState: active
                        cloudStatus: UNREGISTERED
                        displayName: John Doe
                        email: John.Doe@sailpointdemo.com
                        endDate: '2199-01-01T00:00:00.000Z'
                        firstname: John
                        identityState: ACTIVE
                        internalCloudStatus: UNREGISTERED
                        lastname: Doe
                        startDate: '2199-01-01T00:00:00.000Z'
                        uid: John Doe
                        visibleSegments:
                          - d75ae486-044b-4eba-8113-0cdacb5341df
                      disabled: false
                      locked: false
                      accounts:
                        - id: 6f9cce655ddd40ca86a8faab8d5d52ec
                          name: John Doe
                          accountId: ac10e3a8-942a-1409-8194-2e4fe3090003
                          source:
                            id: b33c36dbaf974200b4d91f846abc30a5
                            name: Contractors
                            type: Non-Employee
                          disabled: false
                          locked: false
                          privileged: false
                          manuallyCorrelated: false
                          entitlementAttributes: {}
                          created: '2025-01-03T22:36:20.045Z'
                          supportsPasswordChange: false
                        - id: 9e29df88d4c5449ea790b4c24135b85c
                          name: $FHK300-LAAKDKHU50K3
                          accountId: CN=John Doe,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                            type: Active Directory - Direct
                          disabled: false
                          locked: false
                          privileged: false
                          manuallyCorrelated: true
                          entitlementAttributes:
                            memberOf:
                              - CN=Benefits,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                          created: '2025-01-03T22:36:36.866Z'
                          supportsPasswordChange: true
                        - id: 74e0cd14200943ff92b4f11fa3596eba
                          name: John Doe
                          accountId: John Doe
                          source:
                            id: af4686d6482841ac96d793901372ad9b
                            name: IdentityNow
                            type: IdentityNowConnector
                          disabled: false
                          locked: false
                          privileged: false
                          manuallyCorrelated: false
                          entitlementAttributes: {}
                          created: '2025-01-03T22:36:20.076Z'
                          supportsPasswordChange: true
                          accountAttributes: {}
                      accountCount: 2
                      apps:
                        - id: '20003'
                          name: Active Directory
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          account:
                            id: 9e29df88d4c5449ea790b4c24135b85c
                            accountId: CN=John Doe,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        - id: '20013'
                          name: AD test
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          account:
                            id: 9e29df88d4c5449ea790b4c24135b85c
                            accountId: CN=John Doe,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        - id: '20014'
                          name: Test AD
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          account:
                            id: 9e29df88d4c5449ea790b4c24135b85c
                            accountId: CN=John Doe,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        - id: '5092'
                          name: Accounting
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          account:
                            id: 9e29df88d4c5449ea790b4c24135b85c
                            accountId: CN=John Doe,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        - id: '5822114389092541705'
                          name: IdentityNow app
                          source:
                            id: af4686d6482841ac96d793901372ad9b
                            name: IdentityNow
                          account:
                            id: 74e0cd14200943ff92b4f11fa3596eba
                            accountId: John Doe
                      appCount: 5
                      access:
                        - id: 4919721c3c1a4ca484469b85f0fd9ba1
                          name: Benefits
                          displayName: Benefits
                          type: ENTITLEMENT
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          disabled: false
                          privileged: false
                          attribute: memberOf
                          value: CN=Benefits,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                          standalone: false
                          cloudEligible: false
                          cloudGoverned: false
                          schema: group
                        - id: 7e277d102c874560becc464cdfe33a86
                          name: Benefits Employees
                          displayName: Benefits Employees
                          type: ACCESS_PROFILE
                          description: Access for Benefits Employees. Distribution group and File share access.
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          owner:
                            id: 278f8a1859df48d2a0adb204257b26a2
                            name: Jerry.Bennett
                            displayName: Jerry.Bennett
                          disabled: false
                          privileged: false
                          standalone: false
                          revocable: false
                          cloudEligible: false
                          cloudGoverned: false
                        - id: ad7025c956734455b28fa35e315e77fe
                          name: Benefits Common Access
                          displayName: Benefits Common Access
                          type: ROLE
                          description: Testing AD provisioning with birthright access
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          owner:
                            id: 322c6bce405a495a8e841a014b7d8410
                            name: tina.smith
                            displayName: tina.smith
                          disabled: false
                          privileged: false
                          standalone: false
                          revocable: false
                          cloudEligible: false
                          cloudGoverned: false
                      accessCount: 3
                      accessProfileCount: 1
                      entitlementCount: 1
                      roleCount: 1
                      modified: '2025-01-03T22:36:37.599Z'
                      visibleSegments:
                        - All Employees
                      visibleSegmentCount: 1
                      tagCount: 0
                      pod: pod01-useast1
                      org: org-name
                      synced: '2025-01-03T22:37:04.452Z'
                      _type: identity
                      type: identity
                query-timeZone:
                  summary: Query with timezone
                  value:
                    - name: Laura Peeters
                      firstName: Laura
                      lastName: Peeters
                      displayName: Laura Peeters
                      id: 0011cac38db341738af1f2ce7bb3aede
                      email: Laura.Peeters@sailpointdemo.com
                      created: '2024-04-04T21:36:00.385Z'
                      inactive: false
                      protected: false
                      status: UNREGISTERED
                      employeeNumber: '10673'
                      manager:
                        id: 88e405b1a3b8439daf2efc8f4ff0a98b
                        name: Mia Garcia
                        displayName: Mia Garcia
                      isManager: true
                      identityProfile:
                        id: 00a2bc6244b34f4a88d985f035f2b68b
                        name: HR Global
                      source:
                        id: 524f8d986f9b4192865269516d169eb0
                        name: HR Global
                      attributes:
                        city: Brussels
                        cloudAuthoritativeSource: 524f8d986f9b4192865269516d169eb0
                        cloudLifecycleState: active
                        cloudStatus: UNREGISTERED
                        country: BE
                        department: EMEA Sales
                        displayName: Laura Peeters
                        email: Laura.Peeters@sailpointdemo.com
                        firstname: Laura
                        identificationNumber: '10673'
                        identityState: ACTIVE
                        internalCloudStatus: UNREGISTERED
                        jobTitle: Manager,  Sales - Belgium
                        lastname: Peeters
                        location: EMEA
                        uid: '10673'
                        visibleSegments:
                          - d75ae486-044b-4eba-8113-0cdacb5341df
                      disabled: false
                      locked: false
                      accounts:
                        - id: 830396e8863442f1bce7b485612c8b51
                          name: Laura Peeters
                          accountId: '10673'
                          source:
                            id: 524f8d986f9b4192865269516d169eb0
                            name: HR Global
                            type: DelimitedFile
                          disabled: false
                          locked: false
                          privileged: false
                          manuallyCorrelated: false
                          entitlementAttributes: {}
                          created: '2024-04-04T21:36:00.385Z'
                          supportsPasswordChange: false
                        - id: cd6797419f37492ba22ea991f9d6ba90
                          name: $SEK300-N3K0K4HOPEB6
                          accountId: CN=Laura Peeters,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                            type: Active Directory - Direct
                          disabled: false
                          locked: false
                          privileged: false
                          manuallyCorrelated: true
                          passwordLastSet: '2024-04-04T21:38:57.434Z'
                          entitlementAttributes:
                            memberOf:
                              - CN=Salesforce Access,OU=Sales,OU=AI,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                              - CN=Sales-Folder,OU=Sales,OU=AI,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                              - CN=Benefits,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                              - CN=Salesforce opportunity management,OU=Sales,OU=AI,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                          created: '2024-04-04T21:42:26.787Z'
                          supportsPasswordChange: true
                        - id: db145fd0ec6a4e0cbc3a24bbe0758c8f
                          name: Laura Peeters
                          accountId: '10681'
                          source:
                            id: 524f8d986f9b4192865269516d169eb0
                            name: HR Global
                            type: DelimitedFile
                          disabled: false
                          locked: false
                          privileged: false
                          manuallyCorrelated: false
                          entitlementAttributes: {}
                          created: '2024-04-04T21:36:15.769Z'
                          supportsPasswordChange: false
                        - id: 6b75898eec394b4c98a5c3d2d9ba311b
                          name: Laura Peeters
                          accountId: Laura Peeters
                          source:
                            id: af4686d6482841ac96d793901372ad9b
                            name: IdentityNow
                            type: IdentityNowConnector
                          disabled: false
                          locked: false
                          privileged: false
                          manuallyCorrelated: false
                          entitlementAttributes: {}
                          created: '2024-04-04T21:36:15.809Z'
                          supportsPasswordChange: true
                          accountAttributes: {}
                      accountCount: 3
                      apps:
                        - id: '20003'
                          name: Active Directory
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          account:
                            id: cd6797419f37492ba22ea991f9d6ba90
                            accountId: CN=Laura Peeters,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        - id: '20013'
                          name: AD test
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          account:
                            id: cd6797419f37492ba22ea991f9d6ba90
                            accountId: CN=Laura Peeters,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        - id: '20014'
                          name: Test AD
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          account:
                            id: cd6797419f37492ba22ea991f9d6ba90
                            accountId: CN=Laura Peeters,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        - id: '5092'
                          name: Accounting
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          account:
                            id: cd6797419f37492ba22ea991f9d6ba90
                            accountId: CN=Laura Peeters,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        - id: '5822114389092541705'
                          name: IdentityNow app
                          source:
                            id: af4686d6482841ac96d793901372ad9b
                            name: IdentityNow
                          account:
                            id: 6b75898eec394b4c98a5c3d2d9ba311b
                            accountId: Laura Peeters
                      appCount: 5
                      access:
                        - id: 4919721c3c1a4ca484469b85f0fd9ba1
                          name: Benefits
                          displayName: Benefits
                          type: ENTITLEMENT
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          disabled: false
                          privileged: false
                          attribute: memberOf
                          value: CN=Benefits,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                          standalone: false
                          cloudEligible: false
                          cloudGoverned: false
                          schema: group
                        - id: 4bf8f57887874e9c83ae3a662bf8988c
                          name: Sales-Folder
                          displayName: Sales-Folder
                          type: ENTITLEMENT
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          disabled: false
                          privileged: false
                          attribute: memberOf
                          value: CN=Sales-Folder,OU=Sales,OU=AI,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                          standalone: false
                          cloudEligible: false
                          cloudGoverned: false
                          schema: group
                        - id: f1bea520cace4489805d26de3463262d
                          name: Salesforce Access
                          displayName: Salesforce Access
                          type: ENTITLEMENT
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          disabled: false
                          privileged: false
                          attribute: memberOf
                          value: CN=Salesforce Access,OU=Sales,OU=AI,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                          standalone: false
                          cloudEligible: false
                          cloudGoverned: false
                          schema: group
                        - id: 98a76b26b7884f3e8d115991cebc09b2
                          name: Salesforce opportunity management
                          displayName: Salesforce opportunity management
                          type: ENTITLEMENT
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          disabled: false
                          privileged: false
                          attribute: memberOf
                          value: CN=Salesforce opportunity management,OU=Sales,OU=AI,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                          standalone: false
                          cloudEligible: false
                          cloudGoverned: false
                          schema: group
                        - id: 7e277d102c874560becc464cdfe33a86
                          name: Benefits Employees
                          displayName: Benefits Employees
                          type: ACCESS_PROFILE
                          description: Access for Benefits Employees. Distribution group and File share access.
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          owner:
                            id: 278f8a1859df48d2a0adb204257b26a2
                            name: Jerry.Bennett
                            displayName: Jerry.Bennett
                          disabled: false
                          privileged: false
                          standalone: false
                          revocable: false
                          cloudEligible: false
                          cloudGoverned: false
                        - id: 468171f0af874adebb58d3718519bd56
                          name: SalesCommonAccess
                          displayName: SalesCommonAccess
                          type: ACCESS_PROFILE
                          description: Grants basic access for everyone in the sale department
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          owner:
                            id: 278f8a1859df48d2a0adb204257b26a2
                            name: Jerry.Bennett
                            displayName: Jerry.Bennett
                          disabled: false
                          privileged: false
                          standalone: false
                          revocable: false
                          cloudEligible: false
                          cloudGoverned: false
                        - id: ad7025c956734455b28fa35e315e77fe
                          name: Benefits Common Access
                          displayName: Benefits Common Access
                          type: ROLE
                          description: Testing AD provisioning with birthright access
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          owner:
                            id: 322c6bce405a495a8e841a014b7d8410
                            name: tina.smith
                            displayName: tina.smith
                          disabled: false
                          privileged: false
                          standalone: false
                          revocable: false
                          cloudEligible: false
                          cloudGoverned: false
                        - id: a8819cb0445541438fe08dd38f311b3c
                          name: SalesGlobal
                          displayName: SalesGlobal
                          type: ROLE
                          description: All Sales people in the company
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          owner:
                            id: 29b6ee3f91484d159b1ceac3109af151
                            name: se.admin
                            displayName: se.admin
                          disabled: false
                          privileged: false
                          standalone: false
                          revocable: false
                          cloudEligible: false
                          cloudGoverned: false
                      accessCount: 8
                      accessProfileCount: 2
                      entitlementCount: 4
                      roleCount: 2
                      modified: '2024-12-13T02:49:18.104Z'
                      visibleSegments:
                        - All Employees
                      visibleSegmentCount: 1
                      tagCount: 0
                      pod: pod01-useast1
                      org: org-name
                      synced: '2024-12-13T06:10:14.229Z'
                      _type: identity
                      type: identity
                query-innerHit:
                  summary: Query with innerhit
                  value:
                    - requestCommentsRequired: false
                      schema: group
                      cloudEligible: false
                      displayName: Benefits
                      standalone: false
                      source:
                        name: Active Directory
                        id: 5c71ff71195b4794a0b87e7cf36fb017
                      type: ENTITLEMENT
                      enabled: false
                      privileged: false
                      name: Benefits
                      disabled: false
                      id: 4919721c3c1a4ca484469b85f0fd9ba1
                      requestable: false
                      attribute: memberOf
                      value: CN=Benefits,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                      cloudGoverned: false
                      _type: access
                      _originalType: identity
                    - requestCommentsRequired: false
                      owner:
                        displayName: Jerry.Bennett
                        name: Jerry.Bennett
                        id: 278f8a1859df48d2a0adb204257b26a2
                      cloudEligible: false
                      displayName: Benefits Employees
                      standalone: false
                      description: Access for Benefits Employees. Distribution group and File share access.
                      source:
                        name: Active Directory
                        id: 5c71ff71195b4794a0b87e7cf36fb017
                      revocable: false
                      type: ACCESS_PROFILE
                      enabled: false
                      privileged: false
                      name: Benefits Employees
                      disabled: false
                      id: 7e277d102c874560becc464cdfe33a86
                      requestable: false
                      cloudGoverned: false
                      _type: access
                      _originalType: identity
                typeAheadQuery:
                  summary: Typeahead query
                  value:
                    - Ethan Johnson
                    - Henry Jones
                    - Joan.Wells
                    - Joanna Gonzales
                    - Joe Cook
                    - Joe.Myers
                    - Johan Jacobs
                    - John Doe
                    - John Roberts
                    - John Smith
                    - John.Jarndyce
                    - John.Smithee
                    - John.Williams
                    - Johnny.Elliott
                    - Jonathan.West
                    - Jordan Wilson
                    - Jordan.Sullivan
                    - Jose.Reed
                    - Joao Carvalho
                    - Kamaria Jones
                    - Lisa Jones
                    - Mia Johnson
                    - Michael Johnson
                    - Scott Johnson
                typeAheadQuery-nestedType:
                  summary: Typeahead query with nestedtype
                  value:
                    - Active Directory
                    - PRISM
                    - ServiceNow
                    - TRAKK-WS
                    - AWS
                filter-exists:
                  summary: Filter with exists
                  value:
                    - name: Cory Henry
                      firstName: Cory
                      lastName: Henry
                      displayName: Cory Henry
                      id: 026bb65ed1f54fcd89197ca986e9acac
                      email: Cory.Henry@sailpointdemo.com
                      created: '2024-04-04T21:32:46.844Z'
                      inactive: false
                      protected: false
                      status: UNREGISTERED
                      employeeNumber: '10090'
                      manager:
                        id: 903349b85746471a9a898722206109bb
                        name: Layla Hendricks
                        displayName: Layla Hendricks
                      isManager: true
                      identityProfile:
                        id: 00a2bc6244b34f4a88d985f035f2b68b
                        name: HR Global
                      source:
                        id: 524f8d986f9b4192865269516d169eb0
                        name: HR Global
                      attributes:
                        city: Austin
                        cloudAuthoritativeSource: 524f8d986f9b4192865269516d169eb0
                        cloudLifecycleState: active
                        cloudStatus: UNREGISTERED
                        country: US
                        department: Revenue Operations
                        displayName: Cory Henry
                        email: Cory.Henry@sailpointdemo.com
                        firstname: Cory
                        identificationNumber: '10090'
                        identityState: ACTIVE
                        internalCloudStatus: UNREGISTERED
                        jobTitle: Manager,  System Operations
                        lastname: Henry
                        location: AMS
                        uid: '10090'
                        visibleSegments:
                          - d75ae486-044b-4eba-8113-0cdacb5341df
                          - 8ea4e957-f2f1-4cba-b202-54cc702528d1
                      disabled: false
                      locked: false
                      accounts:
                        - id: a02142f41ad1407884da04a7bfa586d4
                          name: Cory Henry
                          accountId: '10090'
                          source:
                            id: 524f8d986f9b4192865269516d169eb0
                            name: HR Global
                            type: DelimitedFile
                          disabled: false
                          locked: false
                          privileged: false
                          manuallyCorrelated: false
                          entitlementAttributes: {}
                          created: '2024-04-04T21:32:46.844Z'
                          supportsPasswordChange: false
                        - id: f30019e125c74684acee7da3f1643d2a
                          name: $LUJ300-P3QNVHE6R7FB
                          accountId: CN=Cory Henry,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                            type: Active Directory - Direct
                          disabled: false
                          locked: false
                          privileged: false
                          manuallyCorrelated: true
                          passwordLastSet: '2024-04-04T21:33:34.488Z'
                          entitlementAttributes:
                            memberOf:
                              - CN=Benefits,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                          created: '2024-04-04T21:37:03.481Z'
                          supportsPasswordChange: true
                        - id: 7fe340119c5d4b00a9b85d55b18a6416
                          name: Cory Henry
                          accountId: Cory Henry
                          source:
                            id: af4686d6482841ac96d793901372ad9b
                            name: IdentityNow
                            type: IdentityNowConnector
                          disabled: false
                          locked: false
                          privileged: false
                          manuallyCorrelated: false
                          entitlementAttributes: {}
                          created: '2024-04-04T21:37:03.536Z'
                          supportsPasswordChange: true
                          accountAttributes: {}
                      accountCount: 2
                      apps:
                        - id: '20003'
                          name: Active Directory
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          account:
                            id: f30019e125c74684acee7da3f1643d2a
                            accountId: CN=Cory Henry,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        - id: '20013'
                          name: AD test
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          account:
                            id: f30019e125c74684acee7da3f1643d2a
                            accountId: CN=Cory Henry,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        - id: '20014'
                          name: Test AD
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          account:
                            id: f30019e125c74684acee7da3f1643d2a
                            accountId: CN=Cory Henry,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        - id: '5092'
                          name: Accounting
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          account:
                            id: f30019e125c74684acee7da3f1643d2a
                            accountId: CN=Cory Henry,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        - id: '5822114389092541705'
                          name: IdentityNow app
                          source:
                            id: af4686d6482841ac96d793901372ad9b
                            name: IdentityNow
                          account:
                            id: 7fe340119c5d4b00a9b85d55b18a6416
                            accountId: Cory Henry
                      appCount: 5
                      access:
                        - id: ad7025c956734455b28fa35e315e77fe
                          name: Benefits Common Access
                          displayName: Benefits Common Access
                          type: ROLE
                          description: Testing AD provisioning with birthright access
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          owner:
                            id: 322c6bce405a495a8e841a014b7d8410
                            name: tina.smith
                            displayName: tina.smith
                          disabled: false
                          privileged: false
                          standalone: false
                          revocable: false
                          cloudEligible: false
                          cloudGoverned: false
                        - id: 7e277d102c874560becc464cdfe33a86
                          name: Benefits Employees
                          displayName: Benefits Employees
                          type: ACCESS_PROFILE
                          description: Access for Benefits Employees. Distribution group and File share access.
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          owner:
                            id: 278f8a1859df48d2a0adb204257b26a2
                            name: Jerry.Bennett
                            displayName: Jerry.Bennett
                          disabled: false
                          privileged: false
                          standalone: false
                          revocable: false
                          cloudEligible: false
                          cloudGoverned: false
                        - id: 4919721c3c1a4ca484469b85f0fd9ba1
                          name: Benefits
                          displayName: Benefits
                          type: ENTITLEMENT
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          disabled: false
                          privileged: false
                          attribute: memberOf
                          value: CN=Benefits,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                          standalone: false
                          cloudEligible: false
                          cloudGoverned: false
                          schema: group
                      accessCount: 3
                      accessProfileCount: 1
                      entitlementCount: 1
                      roleCount: 1
                      modified: '2024-12-13T02:49:19.214Z'
                      visibleSegments:
                        - All Employees
                        - Austin Employees
                      visibleSegmentCount: 2
                      tagCount: 0
                      pod: pod01-useast1
                      org: org-name
                      synced: '2024-12-13T06:10:29.734Z'
                      _type: identity
                      type: identity
                filter-range:
                  summary: Filter with range
                  value:
                    - name: Mia Garcia
                      firstName: Mia
                      lastName: Garcia
                      displayName: Mia Garcia
                      id: 88e405b1a3b8439daf2efc8f4ff0a98b
                      email: Mia.Garcia@sailpointdemo.com
                      created: '2024-04-04T21:33:05.522Z'
                      inactive: false
                      protected: false
                      status: UNREGISTERED
                      employeeNumber: '10142'
                      manager:
                        id: 624db52c764f410baca2b192caad8e58
                        name: Ethan Johnson
                        displayName: Ethan Johnson
                      isManager: true
                      identityProfile:
                        id: 00a2bc6244b34f4a88d985f035f2b68b
                        name: HR Global
                      source:
                        id: 524f8d986f9b4192865269516d169eb0
                        name: HR Global
                      attributes:
                        city: London
                        cloudAuthoritativeSource: 524f8d986f9b4192865269516d169eb0
                        cloudLifecycleState: active
                        cloudStatus: UNREGISTERED
                        country: GB
                        department: EMEA Sales
                        displayName: Mia Garcia
                        email: Mia.Garcia@sailpointdemo.com
                        firstname: Mia
                        identificationNumber: '10142'
                        identityState: ACTIVE
                        internalCloudStatus: UNREGISTERED
                        jobTitle: Regional Director, EMEA Sales
                        lastname: Garcia
                        location: EMEA
                        uid: '10142'
                        visibleSegments:
                          - d75ae486-044b-4eba-8113-0cdacb5341df
                      disabled: false
                      locked: false
                      accounts:
                        - id: 9021760f10b64f42b7ebfb78085ccaff
                          name: Mia Garcia
                          accountId: '10142'
                          source:
                            id: 524f8d986f9b4192865269516d169eb0
                            name: HR Global
                            type: DelimitedFile
                          disabled: false
                          locked: false
                          privileged: false
                          manuallyCorrelated: false
                          entitlementAttributes: {}
                          created: '2024-04-04T21:33:05.522Z'
                          supportsPasswordChange: false
                        - id: f3ef91f3c2874e79981f2d97297660ee
                          name: $DUJ300-H5LFRVRDLKKM
                          accountId: CN=Mia Garcia,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                            type: Active Directory - Direct
                          disabled: false
                          locked: false
                          privileged: false
                          manuallyCorrelated: true
                          passwordLastSet: '2024-04-04T21:33:25.979Z'
                          entitlementAttributes:
                            memberOf:
                              - CN=Salesforce Access,OU=Sales,OU=AI,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                              - CN=Sales-Folder,OU=Sales,OU=AI,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                              - CN=Benefits,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                              - CN=Salesforce opportunity management,OU=Sales,OU=AI,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                          created: '2024-04-04T21:36:54.974Z'
                          supportsPasswordChange: true
                        - id: c379279cc5b9450cbb274aad31486510
                          name: Mia Garcia
                          accountId: Mia Garcia
                          source:
                            id: af4686d6482841ac96d793901372ad9b
                            name: IdentityNow
                            type: IdentityNowConnector
                          disabled: false
                          locked: false
                          privileged: false
                          manuallyCorrelated: false
                          entitlementAttributes: {}
                          created: '2024-04-04T21:36:55.027Z'
                          supportsPasswordChange: true
                          accountAttributes: {}
                      accountCount: 2
                      apps:
                        - id: '20003'
                          name: Active Directory
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          account:
                            id: f3ef91f3c2874e79981f2d97297660ee
                            accountId: CN=Mia Garcia,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        - id: '20013'
                          name: AD test
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          account:
                            id: f3ef91f3c2874e79981f2d97297660ee
                            accountId: CN=Mia Garcia,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        - id: '20014'
                          name: Test AD
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          account:
                            id: f3ef91f3c2874e79981f2d97297660ee
                            accountId: CN=Mia Garcia,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        - id: '5092'
                          name: Accounting
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          account:
                            id: f3ef91f3c2874e79981f2d97297660ee
                            accountId: CN=Mia Garcia,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        - id: '5822114389092541705'
                          name: IdentityNow app
                          source:
                            id: af4686d6482841ac96d793901372ad9b
                            name: IdentityNow
                          account:
                            id: c379279cc5b9450cbb274aad31486510
                            accountId: Mia Garcia
                      appCount: 5
                      access:
                        - id: 7e277d102c874560becc464cdfe33a86
                          name: Benefits Employees
                          displayName: Benefits Employees
                          type: ACCESS_PROFILE
                          description: Access for Benefits Employees. Distribution group and File share access.
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          owner:
                            id: 278f8a1859df48d2a0adb204257b26a2
                            name: Jerry.Bennett
                            displayName: Jerry.Bennett
                          disabled: false
                          privileged: false
                          standalone: false
                          revocable: false
                          cloudEligible: false
                          cloudGoverned: false
                        - id: 468171f0af874adebb58d3718519bd56
                          name: SalesCommonAccess
                          displayName: SalesCommonAccess
                          type: ACCESS_PROFILE
                          description: Grants basic access for everyone in the sale department
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          owner:
                            id: 278f8a1859df48d2a0adb204257b26a2
                            name: Jerry.Bennett
                            displayName: Jerry.Bennett
                          disabled: false
                          privileged: false
                          standalone: false
                          revocable: false
                          cloudEligible: false
                          cloudGoverned: false
                        - id: ad7025c956734455b28fa35e315e77fe
                          name: Benefits Common Access
                          displayName: Benefits Common Access
                          type: ROLE
                          description: Testing AD provisioning with birthright access
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          owner:
                            id: 322c6bce405a495a8e841a014b7d8410
                            name: tina.smith
                            displayName: tina.smith
                          disabled: false
                          privileged: false
                          standalone: false
                          revocable: false
                          cloudEligible: false
                          cloudGoverned: false
                        - id: a8819cb0445541438fe08dd38f311b3c
                          name: SalesGlobal
                          displayName: SalesGlobal
                          type: ROLE
                          description: All Sales people in the company
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          owner:
                            id: 29b6ee3f91484d159b1ceac3109af151
                            name: se.admin
                            displayName: se.admin
                          disabled: false
                          privileged: false
                          standalone: false
                          revocable: false
                          cloudEligible: false
                          cloudGoverned: false
                        - id: 4919721c3c1a4ca484469b85f0fd9ba1
                          name: Benefits
                          displayName: Benefits
                          type: ENTITLEMENT
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          disabled: false
                          privileged: false
                          attribute: memberOf
                          value: CN=Benefits,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                          standalone: false
                          cloudEligible: false
                          cloudGoverned: false
                          schema: group
                        - id: 4bf8f57887874e9c83ae3a662bf8988c
                          name: Sales-Folder
                          displayName: Sales-Folder
                          type: ENTITLEMENT
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          disabled: false
                          privileged: false
                          attribute: memberOf
                          value: CN=Sales-Folder,OU=Sales,OU=AI,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                          standalone: false
                          cloudEligible: false
                          cloudGoverned: false
                          schema: group
                        - id: f1bea520cace4489805d26de3463262d
                          name: Salesforce Access
                          displayName: Salesforce Access
                          type: ENTITLEMENT
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          disabled: false
                          privileged: false
                          attribute: memberOf
                          value: CN=Salesforce Access,OU=Sales,OU=AI,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                          standalone: false
                          cloudEligible: false
                          cloudGoverned: false
                          schema: group
                        - id: 98a76b26b7884f3e8d115991cebc09b2
                          name: Salesforce opportunity management
                          displayName: Salesforce opportunity management
                          type: ENTITLEMENT
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          disabled: false
                          privileged: false
                          attribute: memberOf
                          value: CN=Salesforce opportunity management,OU=Sales,OU=AI,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                          standalone: false
                          cloudEligible: false
                          cloudGoverned: false
                          schema: group
                      accessCount: 8
                      accessProfileCount: 2
                      entitlementCount: 4
                      roleCount: 2
                      modified: '2024-12-13T02:49:35.220Z'
                      visibleSegments:
                        - All Employees
                      visibleSegmentCount: 1
                      tagCount: 0
                      pod: pod01-useast1
                      org: org-name
                      synced: '2024-12-13T06:25:44.222Z'
                      _type: identity
                      type: identity
                filter-terms:
                  summary: Filter with terms
                  value:
                    - name: Oliver Davies
                      firstName: Oliver
                      lastName: Davies
                      displayName: Oliver Davies
                      id: b173815fef574b74a283f39e6634c215
                      email: Oliver.Davies@sailpointdemo.com
                      created: '2024-04-04T21:32:27.473Z'
                      inactive: false
                      protected: false
                      status: UNREGISTERED
                      employeeNumber: '10029'
                      manager:
                        id: b8c8e021a4104eda91b80bfac6a99b47
                        name: Jackson Brooks
                        displayName: Jackson Brooks
                      isManager: true
                      identityProfile:
                        id: 00a2bc6244b34f4a88d985f035f2b68b
                        name: HR Global
                      source:
                        id: 524f8d986f9b4192865269516d169eb0
                        name: HR Global
                      attributes:
                        city: London
                        cloudAuthoritativeSource: 524f8d986f9b4192865269516d169eb0
                        cloudLifecycleState: active
                        cloudStatus: UNREGISTERED
                        country: GB
                        department: Customer Support
                        displayName: Oliver Davies
                        email: Oliver.Davies@sailpointdemo.com
                        firstname: Oliver
                        identificationNumber: '10029'
                        identityState: ACTIVE
                        internalCloudStatus: UNREGISTERED
                        jobTitle: Call Center
                        lastname: Davies
                        location: EMEA
                        uid: '10029'
                        visibleSegments:
                          - d75ae486-044b-4eba-8113-0cdacb5341df
                      disabled: false
                      locked: false
                      accounts:
                        - id: c8cacc7080254b2781f56e0ded6c8dea
                          name: $GRJ300-AQD2M7N9L7NT
                          accountId: CN=Oliver Davies,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                            type: Active Directory - Direct
                          disabled: false
                          locked: false
                          privileged: false
                          manuallyCorrelated: true
                          passwordLastSet: '2024-04-04T21:30:25.205Z'
                          entitlementAttributes:
                            memberOf:
                              - CN=Benefits,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                          created: '2024-04-04T21:33:54.332Z'
                          supportsPasswordChange: true
                        - id: cd7f58b2290c43909320ff89427b57a1
                          name: Oliver Davies
                          accountId: '10029'
                          source:
                            id: 524f8d986f9b4192865269516d169eb0
                            name: HR Global
                            type: DelimitedFile
                          disabled: false
                          locked: false
                          privileged: false
                          manuallyCorrelated: false
                          entitlementAttributes: {}
                          created: '2024-04-04T21:32:27.473Z'
                          supportsPasswordChange: false
                        - id: a1ee6cd948754371a98105a5a6dd067d
                          name: Oliver Davies
                          accountId: Oliver Davies
                          source:
                            id: af4686d6482841ac96d793901372ad9b
                            name: IdentityNow
                            type: IdentityNowConnector
                          disabled: false
                          locked: false
                          privileged: false
                          manuallyCorrelated: false
                          entitlementAttributes: {}
                          created: '2024-04-04T21:33:54.377Z'
                          supportsPasswordChange: true
                          accountAttributes: {}
                      accountCount: 2
                      apps:
                        - id: '20003'
                          name: Active Directory
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          account:
                            id: c8cacc7080254b2781f56e0ded6c8dea
                            accountId: CN=Oliver Davies,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        - id: '20013'
                          name: AD test
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          account:
                            id: c8cacc7080254b2781f56e0ded6c8dea
                            accountId: CN=Oliver Davies,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        - id: '20014'
                          name: Test AD
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          account:
                            id: c8cacc7080254b2781f56e0ded6c8dea
                            accountId: CN=Oliver Davies,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        - id: '5092'
                          name: Accounting
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          account:
                            id: c8cacc7080254b2781f56e0ded6c8dea
                            accountId: CN=Oliver Davies,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        - id: '5822114389092541705'
                          name: IdentityNow app
                          source:
                            id: af4686d6482841ac96d793901372ad9b
                            name: IdentityNow
                          account:
                            id: a1ee6cd948754371a98105a5a6dd067d
                            accountId: Oliver Davies
                      appCount: 5
                      access:
                        - id: ad7025c956734455b28fa35e315e77fe
                          name: Benefits Common Access
                          displayName: Benefits Common Access
                          type: ROLE
                          description: Testing AD provisioning with birthright access
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          owner:
                            id: 322c6bce405a495a8e841a014b7d8410
                            name: tina.smith
                            displayName: tina.smith
                          disabled: false
                          privileged: false
                          standalone: false
                          revocable: false
                          cloudEligible: false
                          cloudGoverned: false
                        - id: 7e277d102c874560becc464cdfe33a86
                          name: Benefits Employees
                          displayName: Benefits Employees
                          type: ACCESS_PROFILE
                          description: Access for Benefits Employees. Distribution group and File share access.
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          owner:
                            id: 278f8a1859df48d2a0adb204257b26a2
                            name: Jerry.Bennett
                            displayName: Jerry.Bennett
                          disabled: false
                          privileged: false
                          standalone: false
                          revocable: false
                          cloudEligible: false
                          cloudGoverned: false
                        - id: 4919721c3c1a4ca484469b85f0fd9ba1
                          name: Benefits
                          displayName: Benefits
                          type: ENTITLEMENT
                          enabled: false
                          requestable: false
                          requestCommentsRequired: false
                          source:
                            id: 5c71ff71195b4794a0b87e7cf36fb017
                            name: Active Directory
                          disabled: false
                          privileged: false
                          attribute: memberOf
                          value: CN=Benefits,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                          standalone: false
                          cloudEligible: false
                          cloudGoverned: false
                          schema: group
                      accessCount: 3
                      accessProfileCount: 1
                      entitlementCount: 1
                      roleCount: 1
                      modified: '2024-12-13T02:49:35.917Z'
                      visibleSegments:
                        - All Employees
                      visibleSegmentCount: 1
                      tagCount: 0
                      pod: pod01-useast1
                      org: org-name
                      synced: '2024-12-13T06:28:14.763Z'
                      _type: identity
                      type: identity
          headers:
            X-Total-Count:
              schema:
                type: integer
              description: The total result count (returned only if the *count* parameter is specified as *true*).
              example: 30
        '400':
          description: Client Error - Returned if the request body is invalid.
          content:
            application/json:
              schema:
                type: object
                title: Error Response Dto
                properties:
                  detailCode:
                    type: string
                    description: Fine-grained error code providing more detail of the error.
                    example: 400.1 Bad Request Content
                  trackingId:
                    type: string
                    description: Unique tracking id for the error.
                    example: e7eab60924f64aa284175b9fa3309599
                  messages:
                    type: array
                    description: Generic localized reason for error
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
                  causes:
                    type: array
                    description: Plain-text descriptive reasons to provide additional detail to the text provided in the messages field
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
        '401':
          description: Unauthorized - Returned if there is no authorization header, or if the JWT token is expired.
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    description: A message describing the error
                    example: 'JWT validation failed: JWT is expired'
        '403':
          description: Forbidden - Returned if the user you are running as, doesn't have access to this end-point.
          content:
            application/json:
              schema:
                type: object
                title: Error Response Dto
                properties:
                  detailCode:
                    type: string
                    description: Fine-grained error code providing more detail of the error.
                    example: 400.1 Bad Request Content
                  trackingId:
                    type: string
                    description: Unique tracking id for the error.
                    example: e7eab60924f64aa284175b9fa3309599
                  messages:
                    type: array
                    description: Generic localized reason for error
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
                  causes:
                    type: array
                    description: Plain-text descriptive reasons to provide additional detail to the text provided in the messages field
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
              examples:
                '403':
                  summary: An example of a 403 response object
                  value:
                    detailCode: 403 Forbidden
                    trackingId: b21b1f7ce4da4d639f2c62a57171b427
                    messages:
                      - locale: en-US
                        localeOrigin: DEFAULT
                        text: The server understood the request but refuses to authorize it.
        '429':
          description: Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again.
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    description: A message describing the error
                    example: ' Rate Limit Exceeded '
        '500':
          description: Internal Server Error - Returned if there is an unexpected error.
          content:
            application/json:
              schema:
                type: object
                title: Error Response Dto
                properties:
                  detailCode:
                    type: string
                    description: Fine-grained error code providing more detail of the error.
                    example: 400.1 Bad Request Content
                  trackingId:
                    type: string
                    description: Unique tracking id for the error.
                    example: e7eab60924f64aa284175b9fa3309599
                  messages:
                    type: array
                    description: Generic localized reason for error
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
                  causes:
                    type: array
                    description: Plain-text descriptive reasons to provide additional detail to the text provided in the messages field
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
              examples:
                '500':
                  summary: An example of a 500 response object
                  value:
                    detailCode: 500.0 Internal Fault
                    trackingId: b21b1f7ce4da4d639f2c62a57171b427
                    messages:
                      - locale: en-US
                        localeOrigin: DEFAULT
                        text: An internal fault occurred.
components:
  securitySchemes:
    userAuth:
      type: oauth2
      x-displayName: Personal Access Token
      description: |
        OAuth2 Bearer token (JWT) generated using either a [personal access token (PAT)](https://developer.sailpoint.com/docs/api/authentication/#generate-a-personal-access-token) or through the [authorization code flow](https://developer.sailpoint.com/docs/api/authentication/#request-access-token-with-authorization-code-grant-flow).

        Personal access tokens are associated with a user in Identity Security Cloud and relies on the user's [user level](https://documentation.sailpoint.com/saas/help/common/users/index.html) (ex. Admin, Helpdesk, etc.) to determine a base level of access.

        See [Identity Security Cloud REST API Authentication](https://developer.sailpoint.com/docs/api/authentication/) for more information.
      flows:
        clientCredentials:
          tokenUrl: https://example-tenant.api.identitynow.com/oauth/token
          scopes:
            sp:scopes:default: default scope
            sp:scopes:all: access to all scopes
        authorizationCode:
          authorizationUrl: https://example-tenant.login.sailpoint.com/oauth/authorize
          tokenUrl: https://example-tenant.api.identitynow.com/oauth/token
          scopes:
            sp:scopes:default: default scope
            sp:scopes:all: access to all scopes
    applicationAuth:
      type: oauth2
      x-displayName: Client Credentials
      description: |
        OAuth2 Bearer token (JWT) generated using [client credentials flow](https://developer.sailpoint.com/docs/api/authentication/#request-access-token-with-client-credentials-grant-flow).

        Client credentials refers to tokens that are not associated with a user in Identity Security Cloud.

        See [Identity Security Cloud REST API Authentication](https://developer.sailpoint.com/docs/api/authentication/) for more information.
      flows:
        clientCredentials:
          tokenUrl: https://example-tenant.api.identitynow.com/oauth/token
          scopes:
            sp:scopes:default: default scope
            sp:scopes:all: access to all scopes
```
