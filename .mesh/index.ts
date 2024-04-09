// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import OpenapiHandler from "@graphql-mesh/openapi"
import { parse } from 'graphql';
import UseResponseCache from "@graphql-mesh/plugin-response-cache";
import RenameTransform from "@graphql-mesh/transform-rename";
import { resolveAdditionalResolvers } from '@graphql-mesh/utils';
import StitchingMerger from "@graphql-mesh/merger-stitching";
import { printWithCache } from '@graphql-mesh/utils';
import { usePersistedOperations } from '@graphql-yoga/plugin-persisted-operations';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { CitiesTypes } from './sources/Cities/types';
import type { WeatherTypes } from './sources/Weather/types';
import * as importedModule$0 from "./sources/Cities/schemaWithAnnotations";
import * as importedModule$1 from "./sources/Weather/schemaWithAnnotations";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string; }
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: { input: boolean; output: boolean; }
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: { input: number; output: number; }
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: { input: number; output: number; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: bigint; output: bigint; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: Date | string; output: Date | string; }
  ObjMap: { input: any; output: any; }
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: { input: URL | string; output: URL | string; }
  /** Represents date values */
  Date: { input: string; output: string; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  ResolveToSourceArgs: { input: any; output: any; }
};

export type Query = {
  /**
   * Find administrative divisions, filtering by optional criteria. If no criteria are set, you will get back all
   * known divisions.
   *
   */
  findAdminDivisionsUsingGET?: Maybe<Populated_Places_Response>;
  /**
   * Get the details for a specific administrative division, including location coordinates, population, and
   * elevation above sea-level (if available).
   *
   */
  getAdminDivisionUsingGET?: Maybe<Populated_Place_Response>;
  /**
   * Find cities near the given administrative division, filtering by optional criteria. If no criteria are set, you
   * will get back all known cities.
   *
   */
  findCitiesNearAdminDivisionUsingGET?: Maybe<Populated_Places_Response>;
  /**
   * Find administrative divisions near the given origin division, filtering by optional criteria. If no criteria
   * are set, you will get back all known divisions.
   *
   */
  findDivisionsNearAdminDivisionUsingGET?: Maybe<Populated_Places_Response>;
  /**
   * Find cities, filtering by optional criteria. If no criteria are set, you will get back all known cities.
   *
   */
  findCitiesUsingGET?: Maybe<Populated_Places_Response>;
  /**
   * Get the details for a specific city, including location coordinates, population, and elevation above sea-level
   * (if available).
   *
   */
  getCityUsingGET?: Maybe<Populated_Place_Response>;
  /** Get city date-time */
  getCityDateTimeUsingGET?: Maybe<Date_Time_Response>;
  /** Get distance from the given city */
  getCityDistanceUsingGET?: Maybe<Distance_Response>;
  /**
   * Get the details for the containing populated place (e.g., its county or other administrative division), including location coordinates, population, and elevation above sea-level
   * (if available).
   *
   */
  getCityLocatedInUsingGET?: Maybe<Populated_Place_Response>;
  /**
   * Find cities near the given origin city, filtering by optional criteria. If no criteria are set, you will get
   * back all known cities.
   *
   */
  findCitiesNearCityUsingGET?: Maybe<Populated_Places_Response>;
  /** Get city time */
  getCityTimeUsingGET?: Maybe<Time_Response>;
  /**
   * Find countries, filtering by optional criteria. If no criteria are set, you will get back all known countries.
   *
   */
  getCountriesUsingGET?: Maybe<Countries_Response>;
  /** Get the details for a specific country, including number of regions. */
  getCountryUsingGET?: Maybe<Country_Response>;
  /**
   * Get all regions in a specific country. These could be states, provinces, districts, or otherwise major
   * political divisions.
   *
   */
  getRegionsUsingGET?: Maybe<Country_Regions_Response>;
  /** Get the details of a specific country region, including number of cities. */
  getRegionUsingGET?: Maybe<Country_Region_Response>;
  /**
   * Get the administrative divisions in a specific country region. The country and region info is omitted in the
   * response.
   *
   */
  findRegionDivisionsUsingGET?: Maybe<Populated_Places_Response>;
  /**
   * Get the cities in a specific country region. The country and region info is omitted in the response.
   *
   */
  findRegionCitiesUsingGET?: Maybe<Populated_Places_Response>;
  /**
   * Find cities near the given location, filtering by optional criteria. If no criteria are set, you will get back
   * all known cities.
   *
   */
  findCitiesNearLocationUsingGET?: Maybe<Populated_Places_Response>;
  /**
   * Find administrative divisions near the given location, filtering by optional criteria. If no criteria are set,
   * you will get back all known divisions.
   *
   */
  findDivisionsNearLocationUsingGET?: Maybe<Populated_Places_Response>;
  /** Find currencies, filtering by optional criteria. If no criteria are set, you will get back all known currencies. */
  getCurrenciesUsingGET?: Maybe<Currencies_Response>;
  /** Get all supported languages */
  getLanguagesUsingGET?: Maybe<Languages_Response>;
  /** Get all known locales */
  getLocalesUsingGET?: Maybe<Locales_Response>;
  /** Get all known time-zones */
  getTimezonesUsingGET?: Maybe<Time_Zones_Response>;
  /** Get time-zone */
  getTimeZoneUsingGET?: Maybe<Time_Zone_Response>;
  /** Get time-zone date-time */
  getTimeZoneDateTimeUsingGET?: Maybe<Date_Time_Response>;
  /** Get time-zone time */
  getTimeZoneTimeUsingGET?: Maybe<Time_Response>;
  /** Returns severe weather alerts issued by meteorological agencies - given a lat, and a lon. */
  alerts?: Maybe<WeatherAlert>;
  /** Returns a Current Observation - given a lat, and a lon. */
  current?: Maybe<CurrentObsGroup>;
  /**
   * Returns a daily forecast, where each point represents one day (24hr) period. Every point has a datetime string in the format "YYYY-MM-DD". One day begins at 00:00 UTC, and ends at 23:59 UTC.
   *
   */
  forecast_daily?: Maybe<ForecastDay>;
  /** Returns a 60 minute precipitation forecast, where each point represents one minute (1 min) period. */
  forecast_minutely?: Maybe<FCMinutely>;
  /** Returns 72 hour (hourly) Air Quality forecast, where each point represents a one hour period. */
  forecast_airquality?: Maybe<AQHourly>;
  /** Returns historical air quality conditions. See https://www.weatherbit.io/api for API specific rate limits. */
  history_airquality?: Maybe<AQCurrentGroup>;
  /** Returns current air quality conditions. */
  current_airquality?: Maybe<AQCurrentGroup>;
  /**
   * Returns an hourly forecast, where each point represents a one hour period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC.
   *
   */
  forecast_hourly?: Maybe<ForecastHourly>;
  /** Returns Agweather Forecast  - Given a lat, and lon. See https://www.weatherbit.io/api for API specific rate limits. */
  forecast_agweather?: Maybe<ForecastAG>;
  /** Returns Historical Agweather Observations - Given a lat, and lon. See https://www.weatherbit.io/api for API specific rate limits. */
  history_agweather?: Maybe<HistoryAG>;
  /** Returns Historical Climate Normals (Averages) - Given a lat, and lon. See https://www.weatherbit.io/api for API specific rate limits. */
  normals?: Maybe<Normals>;
  /** Returns Historical Observations - Given a lat, and lon. See https://www.weatherbit.io/api for API specific rate limits. */
  history_daily?: Maybe<HistoryDay>;
  /** Returns Historical Observations - Given a lat, and lon. See https://www.weatherbit.io/api for API specific rate limits. */
  history_hourly?: Maybe<History>;
  /** Returns Historical Observations - Given a lat, and lon. See https://www.weatherbit.io/api for API specific rate limits. */
  history_subhourly?: Maybe<HistorySubhourly>;
  /** Retrieve an 8 day forecast relevant to te Energy Sector (degree days, solar radiation, precipitation, wind). */
  forecast_energy?: Maybe<EnergyObsGroupForecast>;
  /** Returns aggregate energy specific historical weather fields, over a specified time period. See https://www.weatherbit.io/api for API specific rate limits. */
  history_energy?: Maybe<EnergyObsGroup>;
  /** Downloads bulk data files - OPTIONS: ( current.csv.gz, forecast_hourly.csv.gz, forecast_daily.csv.gz). Units are Metric (Celcius, m/s, etc). */
  bulk_files?: Maybe<Scalars['JSON']['output']>;
};


export type QueryfindAdminDivisionsUsingGETArgs = {
  location?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['Int']['input']>;
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
  countryIds?: InputMaybe<Scalars['String']['input']>;
  excludedCountryIds?: InputMaybe<Scalars['String']['input']>;
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type QuerygetAdminDivisionUsingGETArgs = {
  divisionId: Scalars['String']['input'];
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
};


export type QueryfindCitiesNearAdminDivisionUsingGETArgs = {
  divisionId: Scalars['String']['input'];
  radius?: InputMaybe<Scalars['Int']['input']>;
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
  countryIds?: InputMaybe<Scalars['String']['input']>;
  excludedCountryIds?: InputMaybe<Scalars['String']['input']>;
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  types?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type QueryfindDivisionsNearAdminDivisionUsingGETArgs = {
  divisionId: Scalars['String']['input'];
  radius?: InputMaybe<Scalars['Int']['input']>;
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
  countryIds?: InputMaybe<Scalars['String']['input']>;
  excludedCountryIds?: InputMaybe<Scalars['String']['input']>;
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type QueryfindCitiesUsingGETArgs = {
  location?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['Int']['input']>;
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
  countryIds?: InputMaybe<Scalars['String']['input']>;
  excludedCountryIds?: InputMaybe<Scalars['String']['input']>;
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  types?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type QuerygetCityUsingGETArgs = {
  cityId: Scalars['String']['input'];
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
};


export type QuerygetCityDateTimeUsingGETArgs = {
  cityId: Scalars['String']['input'];
};


export type QuerygetCityDistanceUsingGETArgs = {
  cityId: Scalars['String']['input'];
  toCityId: Scalars['String']['input'];
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
};


export type QuerygetCityLocatedInUsingGETArgs = {
  cityId: Scalars['String']['input'];
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
};


export type QueryfindCitiesNearCityUsingGETArgs = {
  cityId: Scalars['String']['input'];
  radius?: InputMaybe<Scalars['Int']['input']>;
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
  countryIds?: InputMaybe<Scalars['String']['input']>;
  excludedCountryIds?: InputMaybe<Scalars['String']['input']>;
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  types?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type QuerygetCityTimeUsingGETArgs = {
  cityId: Scalars['String']['input'];
};


export type QuerygetCountriesUsingGETArgs = {
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QuerygetCountryUsingGETArgs = {
  countryId: Scalars['String']['input'];
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
};


export type QuerygetRegionsUsingGETArgs = {
  countryId: Scalars['String']['input'];
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QuerygetRegionUsingGETArgs = {
  countryId: Scalars['String']['input'];
  regionCode: Scalars['String']['input'];
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
};


export type QueryfindRegionDivisionsUsingGETArgs = {
  countryId: Scalars['String']['input'];
  regionCode: Scalars['String']['input'];
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type QueryfindRegionCitiesUsingGETArgs = {
  countryId: Scalars['String']['input'];
  regionCode: Scalars['String']['input'];
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  types?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type QueryfindCitiesNearLocationUsingGETArgs = {
  locationId: Scalars['String']['input'];
  radius?: InputMaybe<Scalars['Int']['input']>;
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
  countryIds?: InputMaybe<Scalars['String']['input']>;
  excludedCountryIds?: InputMaybe<Scalars['String']['input']>;
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  types?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type QueryfindDivisionsNearLocationUsingGETArgs = {
  locationId: Scalars['String']['input'];
  radius?: InputMaybe<Scalars['Int']['input']>;
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
  countryIds?: InputMaybe<Scalars['String']['input']>;
  excludedCountryIds?: InputMaybe<Scalars['String']['input']>;
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type QuerygetCurrenciesUsingGETArgs = {
  countryId: Scalars['String']['input'];
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerygetLanguagesUsingGETArgs = {
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerygetLocalesUsingGETArgs = {
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerygetTimezonesUsingGETArgs = {
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerygetTimeZoneUsingGETArgs = {
  zoneId: Scalars['String']['input'];
};


export type QuerygetTimeZoneDateTimeUsingGETArgs = {
  zoneId: Scalars['String']['input'];
};


export type QuerygetTimeZoneTimeUsingGETArgs = {
  zoneId: Scalars['String']['input'];
};


export type QueryalertsArgs = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
  city_id?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  station?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
};


export type QuerycurrentArgs = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
  include?: InputMaybe<queryInput_current_include>;
  city_id?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  station?: InputMaybe<Scalars['String']['input']>;
  stations?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['String']['input']>;
  cities?: InputMaybe<Scalars['String']['input']>;
  units?: InputMaybe<queryInput_current_units>;
  lang?: InputMaybe<queryInput_current_lang>;
  key: Scalars['String']['input'];
};


export type Queryforecast_dailyArgs = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
  city_id?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  station?: InputMaybe<Scalars['String']['input']>;
  days?: InputMaybe<Scalars['Float']['input']>;
  units?: InputMaybe<queryInput_forecast_daily_units>;
  lang?: InputMaybe<queryInput_forecast_daily_lang>;
  key: Scalars['String']['input'];
};


export type Queryforecast_minutelyArgs = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
  city_id?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  station?: InputMaybe<Scalars['String']['input']>;
  units?: InputMaybe<queryInput_forecast_minutely_units>;
  key: Scalars['String']['input'];
};


export type Queryforecast_airqualityArgs = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
  city_id?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
  hours?: InputMaybe<Scalars['Int']['input']>;
};


export type Queryhistory_airqualityArgs = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
  city_id?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
};


export type Querycurrent_airqualityArgs = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
  city_id?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
};


export type Queryforecast_hourlyArgs = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
  city_id?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  station?: InputMaybe<Scalars['String']['input']>;
  units?: InputMaybe<queryInput_forecast_hourly_units>;
  lang?: InputMaybe<queryInput_forecast_hourly_lang>;
  hours?: InputMaybe<Scalars['Int']['input']>;
  key: Scalars['String']['input'];
};


export type Queryforecast_agweatherArgs = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
  start_date: Scalars['String']['input'];
  end_date: Scalars['String']['input'];
  units?: InputMaybe<queryInput_forecast_agweather_units>;
  key: Scalars['String']['input'];
};


export type Queryhistory_agweatherArgs = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
  start_date: Scalars['String']['input'];
  end_date: Scalars['String']['input'];
  tp: queryInput_history_agweather_tp;
  units?: InputMaybe<queryInput_history_agweather_units>;
  key: Scalars['String']['input'];
};


export type QuerynormalsArgs = {
  lat: Scalars['Float']['input'];
  lon: Scalars['Float']['input'];
  start_day: Scalars['String']['input'];
  end_day: Scalars['String']['input'];
  tp: queryInput_normals_tp;
  units?: InputMaybe<queryInput_normals_units>;
  series_year: Scalars['Float']['input'];
  key: Scalars['String']['input'];
};


export type Queryhistory_dailyArgs = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
  city_id?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  station?: InputMaybe<Scalars['String']['input']>;
  start_date: Scalars['String']['input'];
  end_date: Scalars['String']['input'];
  units?: InputMaybe<queryInput_history_daily_units>;
  lang?: InputMaybe<queryInput_history_daily_lang>;
  key: Scalars['String']['input'];
};


export type Queryhistory_hourlyArgs = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
  city_id?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  station?: InputMaybe<Scalars['String']['input']>;
  start_date: Scalars['String']['input'];
  end_date: Scalars['String']['input'];
  units?: InputMaybe<queryInput_history_hourly_units>;
  lang?: InputMaybe<queryInput_history_hourly_lang>;
  tz?: InputMaybe<queryInput_history_hourly_tz>;
  key: Scalars['String']['input'];
};


export type Queryhistory_subhourlyArgs = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
  city_id?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  station?: InputMaybe<Scalars['String']['input']>;
  start_date: Scalars['String']['input'];
  end_date: Scalars['String']['input'];
  units?: InputMaybe<queryInput_history_subhourly_units>;
  lang?: InputMaybe<queryInput_history_subhourly_lang>;
  tz?: InputMaybe<queryInput_history_subhourly_tz>;
  key: Scalars['String']['input'];
};


export type Queryforecast_energyArgs = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
  threshold?: InputMaybe<Scalars['Float']['input']>;
  units?: InputMaybe<queryInput_forecast_energy_units>;
  tp?: InputMaybe<queryInput_forecast_energy_tp>;
  key: Scalars['String']['input'];
};


export type Queryhistory_energyArgs = {
  lat: Scalars['Float']['input'];
  lon: Scalars['Float']['input'];
  start_date: Scalars['String']['input'];
  end_date: Scalars['String']['input'];
  tp?: InputMaybe<queryInput_history_energy_tp>;
  threshold?: InputMaybe<Scalars['Float']['input']>;
  units?: InputMaybe<queryInput_history_energy_units>;
  key: Scalars['String']['input'];
};


export type Querybulk_filesArgs = {
  key: Scalars['String']['input'];
};

/** A list of populated places */
export type Populated_Places_Response = {
  errors?: Maybe<Array<Maybe<CitiesError>>>;
  links?: Maybe<Array<Maybe<Link>>>;
  metadata?: Maybe<Metadata>;
  data?: Maybe<Array<Maybe<PopulatedPlaceSummary>>>;
};

/** An error that occurred processing the request */
export type CitiesError = {
  code?: Maybe<ErrorCode>;
  message?: Maybe<Scalars['String']['output']>;
};

/**
 * One of a set of enumerated error codes representing the types of errors that can occur processing a
 * request
 */
export type ErrorCode =
  | 'ACCESS_DENIED'
  | 'ENTITY_NOT_FOUND'
  | 'INCOMPATIBLE'
  | 'PARAM_INVALID'
  | 'PARAMS_MUTUALLY_EXCLUSIVE'
  | 'REQUEST_UNPROCESSABLE';

/** A HATEAOS link */
export type Link = {
  href?: Maybe<Scalars['String']['output']>;
  rel?: Maybe<Scalars['String']['output']>;
};

/** Result metadata (currently only associated with collection results) */
export type Metadata = {
  /** The zero-ary offset into the results (0 is the first result) */
  currentOffset?: Maybe<Scalars['BigInt']['output']>;
  /** The total number of results across pages */
  totalCount?: Maybe<Scalars['BigInt']['output']>;
};

/** Minimal populated-place info */
export type PopulatedPlaceSummary = {
  /** The country name (varies by languageCode) */
  country?: Maybe<Scalars['String']['output']>;
  /** The ISO-3166 country code */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** Included if this is the result of a distance query */
  distance?: Maybe<Scalars['Float']['output']>;
  /** The place GeoDB native id */
  id?: Maybe<Scalars['Int']['output']>;
  /** The place latittude (-90.0 to 90.0) */
  latitude?: Maybe<Scalars['Float']['output']>;
  /** The place longitude (-180.0 to 180.0) */
  longitude?: Maybe<Scalars['Float']['output']>;
  /** The place name (varies by languageCode) */
  name?: Maybe<Scalars['String']['output']>;
  /** The place population */
  population?: Maybe<Scalars['Int']['output']>;
  /** The region name (varies by languageCode) */
  region?: Maybe<Scalars['String']['output']>;
  /** The ISO or FIPS region code */
  regionCode?: Maybe<Scalars['String']['output']>;
  type?: Maybe<PopulatedPlaceType>;
  /** The place WikiData id */
  wikiDataId?: Maybe<Scalars['String']['output']>;
  dailyForecast?: Maybe<Array<Maybe<Forecast>>>;
  todayForecast?: Maybe<Forecast>;
};

/**
 * One of a set of enumerated populated-place types known by the service (currently only level-2 admin divisions and
 * cities)
 */
export type PopulatedPlaceType =
  | 'ADM2'
  | 'CITY';

/** Populated-place details response */
export type Populated_Place_Response = {
  errors?: Maybe<Array<Maybe<CitiesError>>>;
  data?: Maybe<Populated_Place_Details>;
};

/** Full populated-place details */
export type Populated_Place_Details = {
  /** The country name (varies by languageCode) */
  country?: Maybe<Scalars['String']['output']>;
  /** The ISO-3166 country code */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** If this place has been soft-deleted */
  deleted?: Maybe<Scalars['Boolean']['output']>;
  /** The place elevation (meters) above sea level */
  elevationMeters?: Maybe<Scalars['Int']['output']>;
  /** The place GeoDB native id */
  id?: Maybe<Scalars['Int']['output']>;
  /** The place latittude (-90.0 to 90.0) */
  latitude?: Maybe<Scalars['Float']['output']>;
  /** The place longitude (-180.0 to 180.0) */
  longitude?: Maybe<Scalars['Float']['output']>;
  /** The place name (varies by languageCode) */
  name?: Maybe<Scalars['String']['output']>;
  /** The place population */
  population?: Maybe<Scalars['Int']['output']>;
  /** The region name (varies by languageCode) */
  region?: Maybe<Scalars['String']['output']>;
  /** The ISO or FIPS region code */
  regionCode?: Maybe<Scalars['String']['output']>;
  /** The place timezone id */
  timezone?: Maybe<Scalars['String']['output']>;
  type?: Maybe<PopulatedPlaceType>;
  /** The place WikiData id */
  wikiDataId?: Maybe<Scalars['String']['output']>;
};

/** An ISO-6801 date-time response */
export type Date_Time_Response = {
  errors?: Maybe<Array<Maybe<CitiesError>>>;
  /** The date-time in ISO-6801 format: yyyyMMdd'T'HHmmssZ */
  data?: Maybe<Scalars['DateTime']['output']>;
};

/** A decimal distance (in miles or kilometers) */
export type Distance_Response = {
  errors?: Maybe<Array<Maybe<CitiesError>>>;
  /** The distance in units as set by the distanceUnit param (defaults to miles) */
  data?: Maybe<Scalars['Float']['output']>;
};

/** An ISO-8601 time response */
export type Time_Response = {
  errors?: Maybe<Array<Maybe<CitiesError>>>;
  /** The time in ISO-8601 format: HHmmss.SSSZ */
  data?: Maybe<Scalars['String']['output']>;
};

/** A list of countries */
export type Countries_Response = {
  errors?: Maybe<Array<Maybe<CitiesError>>>;
  links?: Maybe<Array<Maybe<Link>>>;
  metadata?: Maybe<Metadata>;
  data?: Maybe<Array<Maybe<Country_Summary>>>;
};

/** Minimal country info */
export type Country_Summary = {
  /** The ISO-3166 country code */
  code?: Maybe<Scalars['String']['output']>;
  /** A list of supported ISO-4217 currency codes */
  currencyCodes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The country name (varies by languageCode) */
  name?: Maybe<Scalars['String']['output']>;
  /** The country WikiData id */
  wikiDataId?: Maybe<Scalars['String']['output']>;
};

/** Country details response */
export type Country_Response = {
  errors?: Maybe<Array<Maybe<CitiesError>>>;
  data?: Maybe<Country_Details>;
};

/** Full country details */
export type Country_Details = {
  /** The country dialing prefix */
  callingCode?: Maybe<Scalars['String']['output']>;
  /** The ISO-3166 country code */
  code?: Maybe<Scalars['String']['output']>;
  /** A list of supported ISO-4217 currency codes */
  currencyCodes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The country flag image */
  flagImageUri?: Maybe<Scalars['String']['output']>;
  /** The country name (varies by languageCode) */
  name?: Maybe<Scalars['String']['output']>;
  /** The number of regions in this country */
  numRegions?: Maybe<Scalars['Int']['output']>;
  /** The country WikiData id */
  wikiDataId?: Maybe<Scalars['String']['output']>;
};

/** A list of country regions */
export type Country_Regions_Response = {
  errors?: Maybe<Array<Maybe<CitiesError>>>;
  links?: Maybe<Array<Maybe<Link>>>;
  metadata?: Maybe<Metadata>;
  /** A list of RegionSummaries */
  data?: Maybe<Array<Maybe<Country_Region_Summary>>>;
};

/** Minimal country region info */
export type Country_Region_Summary = {
  /** An ISO-3166 country code */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** The FIPS 10-4 region code */
  fipsCode?: Maybe<Scalars['String']['output']>;
  /** The ISO region code */
  isoCode?: Maybe<Scalars['String']['output']>;
  /** The region name (varies by languageCode) */
  name?: Maybe<Scalars['String']['output']>;
  /** The region WikiData id */
  wikiDataId?: Maybe<Scalars['String']['output']>;
};

/** Country region details response */
export type Country_Region_Response = {
  errors?: Maybe<Array<Maybe<CitiesError>>>;
  data?: Maybe<Country_Region_Details>;
};

/** Full country region details */
export type Country_Region_Details = {
  /** The region's capital city (varies by languageCode) */
  capital?: Maybe<Scalars['String']['output']>;
  /** An ISO-3166 country code */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** The FIPS 10-4 region code */
  fipsCode?: Maybe<Scalars['String']['output']>;
  /** The ISO region code */
  isoCode?: Maybe<Scalars['String']['output']>;
  /** The region name (varies by languageCode) */
  name?: Maybe<Scalars['String']['output']>;
  /** The number of cities in this region */
  numCities?: Maybe<Scalars['Int']['output']>;
  /** The region WikiData id */
  wikiDataId?: Maybe<Scalars['String']['output']>;
};

/** A list of currencies */
export type Currencies_Response = {
  errors?: Maybe<Array<Maybe<CitiesError>>>;
  links?: Maybe<Array<Maybe<Link>>>;
  metadata?: Maybe<Metadata>;
  data?: Maybe<Array<Maybe<Currency>>>;
};

/** Currency info */
export type Currency = {
  /** The ISO-4217 currency code */
  code?: Maybe<Scalars['String']['output']>;
  /** A list of ISO-3166 country codes of countries supporting this currency */
  countryCodes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The currency symbol */
  symbol?: Maybe<Scalars['String']['output']>;
};

/** A list of languages supported by the system */
export type Languages_Response = {
  errors?: Maybe<Array<Maybe<CitiesError>>>;
  links?: Maybe<Array<Maybe<Link>>>;
  metadata?: Maybe<Metadata>;
  data?: Maybe<Array<Maybe<Language>>>;
};

/** A language supported by the service */
export type Language = {
  code?: Maybe<query_getLanguagesUsingGET_allOf_1_data_items_code>;
  name?: Maybe<Scalars['String']['output']>;
};

export type query_getLanguagesUsingGET_allOf_1_data_items_code =
  | 'undefined'
  | 'aa'
  | 'ab'
  | 'ae'
  | 'af'
  | 'ak'
  | 'am'
  | 'an'
  | 'ar'
  | 'as'
  | 'av'
  | 'ay'
  | 'az'
  | 'ba'
  | 'be'
  | 'bg'
  | 'bh'
  | 'bi'
  | 'bm'
  | 'bn'
  | 'bo'
  | 'br'
  | 'bs'
  | 'ca'
  | 'ce'
  | 'ch'
  | 'co'
  | 'cr'
  | 'cs'
  | 'cu'
  | 'cv'
  | 'cy'
  | 'da'
  | 'de'
  | 'dv'
  | 'dz'
  | 'ee'
  | 'el'
  | 'en'
  | 'eo'
  | 'es'
  | 'et'
  | 'eu'
  | 'fa'
  | 'ff'
  | 'fi'
  | 'fj'
  | 'fo'
  | 'fr'
  | 'fy'
  | 'ga'
  | 'gd'
  | 'gl'
  | 'gn'
  | 'gu'
  | 'gv'
  | 'ha'
  | 'he'
  | 'hi'
  | 'ho'
  | 'hr'
  | 'ht'
  | 'hu'
  | 'hy'
  | 'hz'
  | 'ia'
  | 'id'
  | 'ie'
  | 'ig'
  | 'ii'
  | 'ik'
  | 'io'
  | 'is'
  | 'it'
  | 'iu'
  | 'ja'
  | 'jv'
  | 'ka'
  | 'kg'
  | 'ki'
  | 'kj'
  | 'kk'
  | 'kl'
  | 'km'
  | 'kn'
  | 'ko'
  | 'kr'
  | 'ks'
  | 'ku'
  | 'kv'
  | 'kw'
  | 'ky'
  | 'la'
  | 'lb'
  | 'lg'
  | 'li'
  | 'ln'
  | 'lo'
  | 'lt'
  | 'lu'
  | 'lv'
  | 'mg'
  | 'mh'
  | 'mi'
  | 'mk'
  | 'ml'
  | 'mn'
  | 'mr'
  | 'ms'
  | 'mt'
  | 'my'
  | 'na'
  | 'nb'
  | 'nd'
  | 'ne'
  | 'ng'
  | 'nl'
  | 'nn'
  | 'no'
  | 'nr'
  | 'nv'
  | 'ny'
  | 'oc'
  | 'oj'
  | 'om'
  | 'or'
  | 'os'
  | 'pa'
  | 'pi'
  | 'pl'
  | 'ps'
  | 'pt'
  | 'qu'
  | 'rm'
  | 'rn'
  | 'ro'
  | 'ru'
  | 'rw'
  | 'sa'
  | 'sc'
  | 'sd'
  | 'se'
  | 'sg'
  | 'si'
  | 'sk'
  | 'sl'
  | 'sm'
  | 'sn'
  | 'so'
  | 'sq'
  | 'sr'
  | 'ss'
  | 'st'
  | 'su'
  | 'sv'
  | 'sw'
  | 'ta'
  | 'te'
  | 'tg'
  | 'th'
  | 'ti'
  | 'tk'
  | 'tl'
  | 'tn'
  | 'to'
  | 'tr'
  | 'ts'
  | 'tt'
  | 'tw'
  | 'ty'
  | 'ug'
  | 'uk'
  | 'ur'
  | 'uz'
  | 've'
  | 'vi'
  | 'vo'
  | 'wa'
  | 'wo'
  | 'xh'
  | 'yi'
  | 'yo'
  | 'za'
  | 'zh'
  | 'zu';

/** A list of locales */
export type Locales_Response = {
  errors?: Maybe<Array<Maybe<CitiesError>>>;
  links?: Maybe<Array<Maybe<Link>>>;
  metadata?: Maybe<Metadata>;
  data?: Maybe<Array<Maybe<Locale>>>;
};

/** A locale representing a language/region combination */
export type Locale = {
  /** The locale code */
  code?: Maybe<Scalars['String']['output']>;
};

/** A list of time-zones */
export type Time_Zones_Response = {
  errors?: Maybe<Array<Maybe<CitiesError>>>;
  links?: Maybe<Array<Maybe<Link>>>;
  metadata?: Maybe<Metadata>;
  data?: Maybe<Array<Maybe<Time_Zone>>>;
};

/** A time-zone */
export type Time_Zone = {
  /** The time-zone id */
  id?: Maybe<Scalars['String']['output']>;
  /** The time-zone name */
  name?: Maybe<Scalars['String']['output']>;
  /** The number of hours this time-zone is offset from UTC */
  rawUtcOffsetHours?: Maybe<Scalars['Int']['output']>;
};

/** A time-zone */
export type Time_Zone_Response = {
  errors?: Maybe<Array<Maybe<CitiesError>>>;
  /** The time-zone id */
  id?: Maybe<Scalars['String']['output']>;
  /** The time-zone name */
  name?: Maybe<Scalars['String']['output']>;
  /** The number of hours this time-zone is offset from UTC */
  rawUtcOffsetHours?: Maybe<Scalars['Int']['output']>;
};

export type HTTPMethod =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

export type WeatherAlert = {
  /** Latitude */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Longitude */
  lon?: Maybe<Scalars['Float']['output']>;
  alerts?: Maybe<Array<Maybe<WeatherAlertGroup>>>;
};

export type WeatherAlertGroup = {
  /** Brief description of weather alert */
  title?: Maybe<Scalars['String']['output']>;
  /** Full description of weather alert */
  description?: Maybe<Scalars['String']['output']>;
  /** Severity of weather. (Advisory | Watch | Warning) */
  severity?: Maybe<Scalars['String']['output']>;
  /** Issued time UTC */
  effective_utc?: Maybe<Scalars['String']['output']>;
  /** Issued time local */
  effective_local?: Maybe<Scalars['String']['output']>;
  /** Expiration time UTC */
  expires_utc?: Maybe<Scalars['String']['output']>;
  /** Expiration time local */
  expires_local?: Maybe<Scalars['String']['output']>;
  /** URI to weather alert */
  uri?: Maybe<Scalars['URL']['output']>;
  alerts?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type CurrentObsGroup = {
  /** Count of found observations */
  count?: Maybe<Scalars['Int']['output']>;
  data?: Maybe<Array<Maybe<CurrentObs>>>;
};

export type CurrentObs = {
  /** City name (closest) */
  city_name?: Maybe<Scalars['String']['output']>;
  /** State abbreviation */
  state_code?: Maybe<Scalars['String']['output']>;
  /** Country abbreviation */
  country_code?: Maybe<Scalars['String']['output']>;
  /** Local IANA time zone */
  timezone?: Maybe<Scalars['String']['output']>;
  /** Latitude */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Longitude */
  lon?: Maybe<Scalars['Float']['output']>;
  /** Source Station ID */
  station?: Maybe<Scalars['String']['output']>;
  /** List of data sources used in response */
  sources?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Visibility - default (M) */
  vis?: Maybe<Scalars['Int']['output']>;
  /** Relative humidity (%) */
  rh?: Maybe<Scalars['Int']['output']>;
  /** Dew point temperature - default (C) */
  dewpt?: Maybe<Scalars['Float']['output']>;
  /** Wind direction (degrees) */
  wind_dir?: Maybe<Scalars['Int']['output']>;
  /** Cardinal wind direction */
  wind_cdir?: Maybe<Scalars['String']['output']>;
  /** Cardinal wind direction (text) */
  wind_cdir_full?: Maybe<Scalars['String']['output']>;
  /** Wind speed - Default (m/s) */
  wind_speed?: Maybe<Scalars['Float']['output']>;
  /** Wind gust speed - Default (m/s) */
  gust?: Maybe<Scalars['Float']['output']>;
  /** Temperature - Default (C) */
  temp?: Maybe<Scalars['Float']['output']>;
  /** Apparent temperature - Default (C) */
  app_temp?: Maybe<Scalars['Float']['output']>;
  /** Cloud cover (%) */
  clouds?: Maybe<Scalars['Int']['output']>;
  weather?: Maybe<query_current_data_items_weather>;
  /** Cycle Hour (UTC) of observation */
  datetime?: Maybe<Scalars['String']['output']>;
  /** Full time (UTC) of observation (YYYY-MM-DD HH:MM) */
  ob_time?: Maybe<Scalars['String']['output']>;
  /** Unix Timestamp */
  ts?: Maybe<Scalars['Float']['output']>;
  /** Time (UTC) of Sunrise (HH:MM) */
  sunrise?: Maybe<Scalars['String']['output']>;
  /** Time (UTC) of Sunset (HH:MM) */
  sunset?: Maybe<Scalars['String']['output']>;
  /** Mean sea level pressure in millibars (mb) */
  slp?: Maybe<Scalars['Float']['output']>;
  /** Pressure (mb) */
  pres?: Maybe<Scalars['Float']['output']>;
  /** Air quality index (US EPA standard 0 to +500) */
  aqi?: Maybe<Scalars['Float']['output']>;
  /** UV Index */
  uv?: Maybe<Scalars['Float']['output']>;
  /** Estimated solar radiation (W/m^2) */
  solar_rad?: Maybe<Scalars['Float']['output']>;
  /** Global horizontal irradiance (W/m^2) */
  ghi?: Maybe<Scalars['Float']['output']>;
  /** Direct normal irradiance (W/m^2) */
  dni?: Maybe<Scalars['Float']['output']>;
  /** Diffuse horizontal irradiance (W/m^2) */
  dhi?: Maybe<Scalars['Float']['output']>;
  /** Current solar elevation angle (Degrees) */
  elev_angle?: Maybe<Scalars['Float']['output']>;
  /** Current solar hour angle (Degrees) */
  hour_angle?: Maybe<Scalars['Float']['output']>;
  /** Part of the day (d = day, n = night) */
  pod?: Maybe<Scalars['String']['output']>;
  /** Precipitation in last hour - Default (mm) */
  precip?: Maybe<Scalars['Float']['output']>;
  /** Snowfall in last hour - Default (mm) */
  snow?: Maybe<Scalars['Float']['output']>;
};

export type query_current_data_items_weather = {
  /** Icon code for forecast image display */
  icon?: Maybe<Scalars['String']['output']>;
  /** Weather Condition code */
  code?: Maybe<Scalars['Int']['output']>;
  /** Weather Condition description */
  description?: Maybe<Scalars['String']['output']>;
};

/** Include 1 hour - minutely precip forecast in the response, or severe weather alerts */
export type queryInput_current_include =
  | 'minutely'
  | 'alerts';

/** Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> */
export type queryInput_current_units =
  | 'S'
  | 'I';

/** Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a> */
export type queryInput_current_lang =
  | 'ar'
  | 'az'
  | 'be'
  | 'bg'
  | 'bs'
  | 'ca'
  | 'cs'
  | 'de'
  | 'fi'
  | 'fr'
  | 'el'
  | 'es'
  | 'et'
  | 'hr'
  | 'hu'
  | 'id'
  | 'it'
  | 'is'
  | 'kw'
  | 'nb'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'sl'
  | 'sr'
  | 'sv'
  | 'tr'
  | 'uk'
  | 'zh'
  | 'zh_tw';

export type ForecastDay = {
  /** City Name */
  city_name?: Maybe<Scalars['String']['output']>;
  /** State Abbreviation */
  state_code?: Maybe<Scalars['String']['output']>;
  /** Country Abbreviation */
  country_code?: Maybe<Scalars['String']['output']>;
  /** Latitude */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Longitude */
  lon?: Maybe<Scalars['Float']['output']>;
  /** Local IANA time zone */
  timezone?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Array<Maybe<Forecast>>>;
};

export type Forecast = {
  /** Unix Timestamp */
  ts?: Maybe<Scalars['Float']['output']>;
  /** Timestamp in local time */
  timestamp_local?: Maybe<Scalars['String']['output']>;
  /** Timestamp UTC */
  timestamp_utc?: Maybe<Scalars['String']['output']>;
  /** Date in format "YYYY-MM-DD:HH". All datetime is in (UTC) */
  datetime?: Maybe<Scalars['String']['output']>;
  /** Accumulated snowfall since last forecast point - default (mm) */
  snow?: Maybe<Scalars['Float']['output']>;
  /** Snow Depth - default (mm) */
  snow_depth?: Maybe<Scalars['Float']['output']>;
  /** Accumulated precipitation since last forecast point - default (mm) */
  precip?: Maybe<Scalars['Float']['output']>;
  /** Temperature (Average) - default (C) */
  temp?: Maybe<Scalars['Float']['output']>;
  /** Dewpoint (Average) - default (C) */
  dewpt?: Maybe<Scalars['Float']['output']>;
  /** Maximum daily Temperature - default (C) */
  max_temp?: Maybe<Scalars['Float']['output']>;
  /** Minimum daily Temperature - default (C) */
  min_temp?: Maybe<Scalars['Float']['output']>;
  /** Apparent Maximum daily Temperature - default (C) */
  app_max_temp?: Maybe<Scalars['Float']['output']>;
  /** Apparent Minimum daily Temperature - default (C) */
  app_min_temp?: Maybe<Scalars['Float']['output']>;
  /** Relative Humidity as a percentage (%) */
  rh?: Maybe<Scalars['Int']['output']>;
  /** Cloud cover as a percentage (%) */
  clouds?: Maybe<Scalars['Int']['output']>;
  weather?: Maybe<query_forecast_daily_data_items_weather>;
  /** Mean Sea level pressure (mb) */
  slp?: Maybe<Scalars['Float']['output']>;
  /** Pressure (mb) */
  pres?: Maybe<Scalars['Float']['output']>;
  /** UV Index */
  uv?: Maybe<Scalars['Float']['output']>;
  /** [Deprecated] Max direct component of solar insolation (W/m^2) */
  max_dhi?: Maybe<Scalars['Float']['output']>;
  /** Average Visibility default (KM) */
  vis?: Maybe<Scalars['Float']['output']>;
  /** Chance of Precipitation as a percentage (%) */
  pop?: Maybe<Scalars['Float']['output']>;
  /** Moon phase */
  moon_phase?: Maybe<Scalars['Float']['output']>;
  /** Sunrise unix timestamp */
  sunrise_ts?: Maybe<Scalars['Int']['output']>;
  /** Sunset unix timestamp */
  sunset_ts?: Maybe<Scalars['Int']['output']>;
  /** Moonrise unix timestamp */
  moonrise_ts?: Maybe<Scalars['Int']['output']>;
  /** Moonset unix timestamp */
  moonset_ts?: Maybe<Scalars['Int']['output']>;
  /** Part of the day (d = day, n = night) */
  pod?: Maybe<Scalars['String']['output']>;
  /** Wind Speed (default m/s) */
  wind_spd?: Maybe<Scalars['Float']['output']>;
  /** Wind direction */
  wind_dir?: Maybe<Scalars['Int']['output']>;
  /** Cardinal wind direction */
  wind_cdir?: Maybe<Scalars['String']['output']>;
  /** Cardinal wind direction (text) */
  wind_cdir_full?: Maybe<Scalars['String']['output']>;
};

export type query_forecast_daily_data_items_weather = {
  /** Icon code for forecast image display */
  icon?: Maybe<Scalars['String']['output']>;
  /** Weather Condition code */
  code?: Maybe<Scalars['Int']['output']>;
  /** Weather Condition description */
  description?: Maybe<Scalars['String']['output']>;
};

/** Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> */
export type queryInput_forecast_daily_units =
  | 'S'
  | 'I';

/** Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a> */
export type queryInput_forecast_daily_lang =
  | 'ar'
  | 'az'
  | 'be'
  | 'bg'
  | 'bs'
  | 'ca'
  | 'cs'
  | 'de'
  | 'fi'
  | 'fr'
  | 'el'
  | 'es'
  | 'et'
  | 'hr'
  | 'hu'
  | 'id'
  | 'it'
  | 'is'
  | 'kw'
  | 'nb'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'sl'
  | 'sr'
  | 'sv'
  | 'tr'
  | 'uk'
  | 'zh'
  | 'zh_tw';

export type FCMinutely = {
  /** City Name */
  city_name?: Maybe<Scalars['String']['output']>;
  /** State Abbreviation */
  state_code?: Maybe<Scalars['String']['output']>;
  /** Country Abbreviation */
  country_code?: Maybe<Scalars['String']['output']>;
  /** Latitude */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Longitude */
  lon?: Maybe<Scalars['Float']['output']>;
  /** Local IANA time zone */
  timezone?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Array<Maybe<FCMinutelyOb>>>;
};

export type FCMinutelyOb = {
  /** Full time (UTC) of forecast point (YYYY-MM-DD HH:MM) */
  timestamp_utc?: Maybe<Scalars['String']['output']>;
  /** Full local time of forecast point (YYYY-MM-DD HH:MM) */
  timestamp_local?: Maybe<Scalars['String']['output']>;
  /** Unix Timestamp */
  ts?: Maybe<Scalars['Float']['output']>;
  /** Precipitation rate - Default (mm/hr) */
  precip?: Maybe<Scalars['Float']['output']>;
  /** Temperature - Default (C) */
  temp?: Maybe<Scalars['Float']['output']>;
  /** Snowfall rate - Default (mm/hr) */
  snow?: Maybe<Scalars['Float']['output']>;
};

/** Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> */
export type queryInput_forecast_minutely_units =
  | 'S'
  | 'I';

export type AQHourly = {
  /** City Name */
  city_name?: Maybe<Scalars['String']['output']>;
  /** State Abbreviation */
  state_code?: Maybe<Scalars['String']['output']>;
  /** Country Abbreviation */
  country_code?: Maybe<Scalars['String']['output']>;
  /** Latitude */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Longitude */
  lon?: Maybe<Scalars['Float']['output']>;
  /** Local IANA time zone */
  timezone?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Array<Maybe<AQHour>>>;
};

export type AQHour = {
  /** Unix Timestamp */
  ts?: Maybe<Scalars['Float']['output']>;
  /** Timestamp in local time */
  timestamp_local?: Maybe<Scalars['String']['output']>;
  /** Timestamp UTC */
  timestamp_utc?: Maybe<Scalars['String']['output']>;
  /** Cloud cover as a percentage (%) */
  aqi?: Maybe<Scalars['Int']['output']>;
  /** Concentration of SO2 (µg/m³) */
  so2?: Maybe<Scalars['Float']['output']>;
  /** Concentration of NO2 (µg/m³) */
  no2?: Maybe<Scalars['Float']['output']>;
  /** Concentration of O3 (µg/m³) */
  o3?: Maybe<Scalars['Float']['output']>;
  /** Concentration of PM 2.5 (µg/m³) */
  pm25?: Maybe<Scalars['Float']['output']>;
  /** Concentration of PM 10 (µg/m³) */
  pm10?: Maybe<Scalars['Float']['output']>;
};

export type AQCurrentGroup = {
  /** City Name */
  city_name?: Maybe<Scalars['String']['output']>;
  /** State Abbreviation */
  state_code?: Maybe<Scalars['String']['output']>;
  /** Country Abbreviation */
  country_code?: Maybe<Scalars['String']['output']>;
  /** Latitude */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Longitude */
  lon?: Maybe<Scalars['Float']['output']>;
  /** Local IANA time zone */
  timezone?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Array<Maybe<AQCurrent>>>;
};

export type AQCurrent = {
  /** Cloud cover as a percentage (%) */
  aqi?: Maybe<Scalars['Int']['output']>;
  /** Concentration of SO2 (µg/m³) */
  so2?: Maybe<Scalars['Float']['output']>;
  /** Concentration of NO2 (µg/m³) */
  no2?: Maybe<Scalars['Float']['output']>;
  /** Concentration of O3 (µg/m³) */
  o3?: Maybe<Scalars['Float']['output']>;
  /** Concentration of PM 2.5 (µg/m³) */
  pm25?: Maybe<Scalars['Float']['output']>;
  /** Concentration of PM 10 (µg/m³) */
  pm10?: Maybe<Scalars['Float']['output']>;
};

export type ForecastHourly = {
  /** City Name */
  city_name?: Maybe<Scalars['String']['output']>;
  /** State Abbreviation */
  state_code?: Maybe<Scalars['String']['output']>;
  /** Country Abbreviation */
  country_code?: Maybe<Scalars['String']['output']>;
  /** Latitude */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Longitude */
  lon?: Maybe<Scalars['Float']['output']>;
  /** Local IANA time zone */
  timezone?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Array<Maybe<ForecastHour>>>;
};

export type ForecastHour = {
  /** Unix Timestamp */
  ts?: Maybe<Scalars['Float']['output']>;
  /** Timestamp in local time */
  timestamp_local?: Maybe<Scalars['String']['output']>;
  /** Timestamp UTC */
  timestamp_utc?: Maybe<Scalars['String']['output']>;
  /** Date in format "YYYY-MM-DD:HH". All datetime is in (UTC) */
  datetime?: Maybe<Scalars['String']['output']>;
  /** Accumulated snowfall since last forecast point - Default (mm) */
  snow?: Maybe<Scalars['Float']['output']>;
  /** Snow depth - Default (mm) */
  snow_depth?: Maybe<Scalars['Float']['output']>;
  /** Accumulated precipitation since last forecast point. Default (mm) */
  precip?: Maybe<Scalars['Float']['output']>;
  /** Temperature - Default (C) */
  temp?: Maybe<Scalars['Float']['output']>;
  /** Dewpoint - Default (C) */
  dewpt?: Maybe<Scalars['Float']['output']>;
  /** Apparent Temperature - Default (C) */
  app_temp?: Maybe<Scalars['Float']['output']>;
  /** Relative Humidity as a percentage (%) */
  rh?: Maybe<Scalars['Int']['output']>;
  /** Cloud cover as a percentage (%) */
  clouds?: Maybe<Scalars['Int']['output']>;
  weather?: Maybe<query_forecast_hourly_data_items_weather>;
  /** Mean Sea level pressure (mb) */
  slp?: Maybe<Scalars['Float']['output']>;
  /** Pressure (mb) */
  pres?: Maybe<Scalars['Float']['output']>;
  /** UV Index */
  uv?: Maybe<Scalars['Float']['output']>;
  /** Estimated solar radiation (W/m^2) */
  solar_rad?: Maybe<Scalars['Float']['output']>;
  /** Global horizontal solar irradiance (W/m^2) */
  ghi?: Maybe<Scalars['Float']['output']>;
  /** Diffuse normal solar irradiance (W/m^2) */
  dhi?: Maybe<Scalars['Float']['output']>;
  /** Direct normal solar irradiance (W/m^2) */
  dni?: Maybe<Scalars['Float']['output']>;
  /** Visibility - Default (KM) */
  vis?: Maybe<Scalars['Float']['output']>;
  /** Part of day (d = day, n = night) */
  pod?: Maybe<Scalars['String']['output']>;
  /** Chance of Precipitation as a percentage (%) */
  pop?: Maybe<Scalars['Float']['output']>;
  /** Wind Speed - Default (m/s) */
  wind_spd?: Maybe<Scalars['Float']['output']>;
  /** Wind Gust Speed - Default (m/s) */
  wind_gust_spd?: Maybe<Scalars['Float']['output']>;
  /** Wind direction */
  wind_dir?: Maybe<Scalars['Int']['output']>;
  /** Cardinal wind direction */
  wind_cdir?: Maybe<Scalars['String']['output']>;
  /** Cardinal wind direction (text) */
  wind_cdir_full?: Maybe<Scalars['String']['output']>;
};

export type query_forecast_hourly_data_items_weather = {
  /** Icon code for forecast image display */
  icon?: Maybe<Scalars['String']['output']>;
  /** Weather Condition code */
  code?: Maybe<Scalars['Int']['output']>;
  /** Weather Condition description */
  description?: Maybe<Scalars['String']['output']>;
};

/** Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> */
export type queryInput_forecast_hourly_units =
  | 'S'
  | 'I';

/** Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a> */
export type queryInput_forecast_hourly_lang =
  | 'ar'
  | 'az'
  | 'be'
  | 'bg'
  | 'bs'
  | 'ca'
  | 'cs'
  | 'de'
  | 'fi'
  | 'fr'
  | 'el'
  | 'es'
  | 'et'
  | 'hr'
  | 'hu'
  | 'id'
  | 'it'
  | 'is'
  | 'kw'
  | 'nb'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'sl'
  | 'sr'
  | 'sv'
  | 'tr'
  | 'uk'
  | 'zh'
  | 'zh_tw';

export type ForecastAG = {
  /** Latitude */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Longitude */
  lon?: Maybe<Scalars['Float']['output']>;
  data?: Maybe<Array<Maybe<HistoryAGObj>>>;
};

export type HistoryAGObj = {
  /** Bulk Soil Density */
  bulk_soil_density?: Maybe<Scalars['Float']['output']>;
  /** Average Downward Longwave Radiation Flux */
  dlwrf_avg?: Maybe<Scalars['Float']['output']>;
  /** Maximum Downward Longwave Radiation Flux */
  dlwrf_max?: Maybe<Scalars['Float']['output']>;
  /** Net Downward Longwave Radiation Flux */
  dlwrf_net?: Maybe<Scalars['Float']['output']>;
  /** Average Downward Shortwave Radiation Flux */
  dswrf_avg?: Maybe<Scalars['Float']['output']>;
  /** Maximum Downward Shortwave Radiation Flux */
  dswrf_max?: Maybe<Scalars['Float']['output']>;
  /** Net Downward Shortwave Radiation Flux */
  dswrf_net?: Maybe<Scalars['Float']['output']>;
  /** Evapotranspiration */
  evapotranspiration?: Maybe<Scalars['Float']['output']>;
  /** Precipitation */
  precip?: Maybe<Scalars['Float']['output']>;
  /** Average Pressure */
  pres_avg?: Maybe<Scalars['Float']['output']>;
  /** Data revision status */
  revision_status?: Maybe<Scalars['String']['output']>;
  /** Average Skin Temperature */
  skin_temp_avg?: Maybe<Scalars['Float']['output']>;
  /** Maximum Skin Temperature */
  skin_temp_max?: Maybe<Scalars['Float']['output']>;
  /** Minimum Skin Temperature */
  skin_temp_min?: Maybe<Scalars['Float']['output']>;
  /** Soil Moisture (0-10cm depth) */
  soilm_0_10cm?: Maybe<Scalars['Float']['output']>;
  /** Soil Moisture (100-200cm depth) */
  soilm_100_200cm?: Maybe<Scalars['Float']['output']>;
  /** Soil Moisture (10-40cm depth) */
  soilm_10_40cm?: Maybe<Scalars['Float']['output']>;
  /** Soil Moisture (40-100cm depth) */
  soilm_40_100cm?: Maybe<Scalars['Float']['output']>;
  /** Soil Temperature (0-10cm depth) */
  soilt_0_10cm?: Maybe<Scalars['Float']['output']>;
  /** Soil Temperature (100-200cm depth) */
  soilt_100_200cm?: Maybe<Scalars['Float']['output']>;
  /** Soil Temperature (10-40cm depth) */
  soilt_10_40cm?: Maybe<Scalars['Float']['output']>;
  /** Soil Temperature (40-100cm depth) */
  soilt_40_100cm?: Maybe<Scalars['Float']['output']>;
  /** Specific Humidity */
  specific_humidity?: Maybe<Scalars['Float']['output']>;
  /** Timestamp in local time */
  timestamp_local?: Maybe<Scalars['String']['output']>;
  /** Timestamp UTC */
  timestamp_utc?: Maybe<Scalars['String']['output']>;
  /** Average Temperature at 2 meters */
  temp_2m_avg?: Maybe<Scalars['Float']['output']>;
  /** Volumetric Soil Moisture (0-10cm depth) */
  v_soilm_0_10cm?: Maybe<Scalars['Float']['output']>;
  /** Volumetric Soil Moisture (100-200cm depth) */
  v_soilm_100_200cm?: Maybe<Scalars['Float']['output']>;
  /** Volumetric Soil Moisture (10-40cm depth) */
  v_soilm_10_40cm?: Maybe<Scalars['Float']['output']>;
  /** Volumetric Soil Moisture (40-100cm depth) */
  v_soilm_40_100cm?: Maybe<Scalars['Float']['output']>;
  /** Valid Date */
  valid_date?: Maybe<Scalars['Date']['output']>;
  /** Average Wind Speed at 10 meters */
  wind_10m_spd_avg?: Maybe<Scalars['Float']['output']>;
};

/** Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> */
export type queryInput_forecast_agweather_units =
  | 'S'
  | 'I';

export type HistoryAG = {
  /** Latitude */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Longitude */
  lon?: Maybe<Scalars['Float']['output']>;
  data?: Maybe<Array<Maybe<HistoryAGObj>>>;
};

/** Time period of calculation (daily [DEFAULT], or hourly). */
export type queryInput_history_agweather_tp =
  | 'daily'
  | 'hourly';

/** Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> */
export type queryInput_history_agweather_units =
  | 'S'
  | 'I';

export type Normals = {
  /** Local IANA time zone */
  timezone?: Maybe<Scalars['String']['output']>;
  /** List of data sources used in response */
  sources?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  data?: Maybe<Array<Maybe<NormalsObj>>>;
};

export type NormalsObj = {
  /** Day number */
  day?: Maybe<Scalars['Float']['output']>;
  /** Month number */
  month?: Maybe<Scalars['Float']['output']>;
  /** Hour number */
  hour?: Maybe<Scalars['Float']['output']>;
  /** Average temperature */
  temp?: Maybe<Scalars['Float']['output']>;
  /** Average dew point */
  dewpt?: Maybe<Scalars['Float']['output']>;
  /** Maximum wind speed */
  max_wind_spd?: Maybe<Scalars['Float']['output']>;
  /** Minimum wind speed */
  min_wind_spd?: Maybe<Scalars['Float']['output']>;
  /** Average wind speed */
  wind_spd?: Maybe<Scalars['Float']['output']>;
  /** Average wind direction */
  wind_dir?: Maybe<Scalars['Float']['output']>;
  /** Average Liquid equivalent precipitation - Default (mm) */
  precip?: Maybe<Scalars['Float']['output']>;
  /** Average Snowfall - Default (mm) */
  snow?: Maybe<Scalars['Float']['output']>;
};

/** Time period of calculation (daily, monthly, or hourly). */
export type queryInput_normals_tp =
  | 'daily'
  | 'hourly'
  | 'monthly';

/** Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> */
export type queryInput_normals_units =
  | 'S'
  | 'I';

export type HistoryDay = {
  /** City name (Closest) */
  city_name?: Maybe<Scalars['String']['output']>;
  /** State abbreviation */
  state_code?: Maybe<Scalars['String']['output']>;
  /** Country abbreviation */
  country_code?: Maybe<Scalars['String']['output']>;
  /** Local IANA time zone */
  timezone?: Maybe<Scalars['String']['output']>;
  /** Latitude */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Longitude */
  lon?: Maybe<Scalars['Float']['output']>;
  /** List of data sources used in response */
  sources?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  data?: Maybe<Array<Maybe<HistoryDayObj>>>;
};

export type HistoryDayObj = {
  /** Date in format "YYYY-MM-DD". All datetime is in (UTC) */
  datetime?: Maybe<Scalars['Date']['output']>;
  /** Unix timestamp of datetime (Midnight UTC) */
  ts?: Maybe<Scalars['Int']['output']>;
  /** Data revision status (interim or final) */
  revision_status?: Maybe<Scalars['String']['output']>;
  /** Average sea level pressure (mb) */
  slp?: Maybe<Scalars['Float']['output']>;
  /** Average pressure (mb) */
  pres?: Maybe<Scalars['Float']['output']>;
  /** Average relative humidity as a percentage (%) */
  rh?: Maybe<Scalars['Float']['output']>;
  /** Average dewpoint - Default (C) */
  dewpt?: Maybe<Scalars['Float']['output']>;
  /** Average temperature - Default (C) */
  temp?: Maybe<Scalars['Float']['output']>;
  /** Max temperature - Default (C) */
  max_temp?: Maybe<Scalars['Float']['output']>;
  /** Time of max memperature - Unix Timestamp */
  max_temp_ts?: Maybe<Scalars['Float']['output']>;
  /** Min temperature - Default (C) */
  min_temp?: Maybe<Scalars['Float']['output']>;
  /** Time of max temperature - unix timestamp */
  min_temp_ts?: Maybe<Scalars['Float']['output']>;
  /** Average wind speed - default (m/s) */
  wind_spd?: Maybe<Scalars['Float']['output']>;
  /** Average wind direction (degrees) */
  wind_dir?: Maybe<Scalars['Int']['output']>;
  /** Wind gust speed - default (m/s) */
  wind_gust_spd?: Maybe<Scalars['Float']['output']>;
  /** Max 2min Wind Speed - default (m/s) */
  max_wind_spd?: Maybe<Scalars['Float']['output']>;
  /** Direction of wind at time of max 2min wind (degrees) */
  max_wind_dir?: Maybe<Scalars['Int']['output']>;
  /** Time of max 2min wind - unix timestamp */
  max_wind_spd_ts?: Maybe<Scalars['Float']['output']>;
  /** Average hourly global horizontal solar irradiance (W/m^2) */
  ghi?: Maybe<Scalars['Int']['output']>;
  /** Total global horizontal solar irradiance (W/m^2) */
  t_ghi?: Maybe<Scalars['Int']['output']>;
  /** Average direct normal solar irradiance (W/m^2) */
  dni?: Maybe<Scalars['Int']['output']>;
  /** Total direct normal solar irradiance (W/m^2) */
  t_dni?: Maybe<Scalars['Int']['output']>;
  /** Average hourly diffuse horizontal solar irradiance (W/m^2) */
  dhi?: Maybe<Scalars['Int']['output']>;
  /** Total diffuse horizontal solar irradiance (W/m^2) */
  t_dhi?: Maybe<Scalars['Int']['output']>;
  /** Max UV Index (1-11+) */
  max_uv?: Maybe<Scalars['Float']['output']>;
  /** Liquid equivalent precipitation - default (mm) */
  precip?: Maybe<Scalars['Float']['output']>;
  /** Satellite estimated liquid equivalent precipitation - default (mm) */
  precip_gpm?: Maybe<Scalars['Float']['output']>;
  /** Snowfall - default (mm) */
  snow?: Maybe<Scalars['Float']['output']>;
  /** Snow Depth - default (mm) */
  snow_depth?: Maybe<Scalars['Float']['output']>;
};

/** Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> */
export type queryInput_history_daily_units =
  | 'S'
  | 'I';

/** Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a> */
export type queryInput_history_daily_lang =
  | 'ar'
  | 'az'
  | 'be'
  | 'bg'
  | 'bs'
  | 'ca'
  | 'cs'
  | 'de'
  | 'fi'
  | 'fr'
  | 'el'
  | 'es'
  | 'et'
  | 'hr'
  | 'hu'
  | 'id'
  | 'it'
  | 'is'
  | 'kw'
  | 'nb'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'sl'
  | 'sr'
  | 'sv'
  | 'tr'
  | 'uk'
  | 'zh'
  | 'zh_tw';

export type History = {
  /** City name (Closest) */
  city_name?: Maybe<Scalars['String']['output']>;
  /** State abbreviation */
  state_code?: Maybe<Scalars['String']['output']>;
  /** Country abbreviation */
  country_code?: Maybe<Scalars['String']['output']>;
  /** Local IANA time zone */
  timezone?: Maybe<Scalars['String']['output']>;
  /** Latitude */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Longitude */
  lon?: Maybe<Scalars['Float']['output']>;
  /** List of data sources used in response */
  sources?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  data?: Maybe<Array<Maybe<HistoryObj>>>;
};

export type HistoryObj = {
  /** Unix Timestamp */
  ts?: Maybe<Scalars['Float']['output']>;
  /** Timestamp in local time */
  timestamp_local?: Maybe<Scalars['String']['output']>;
  /** Timestamp UTC */
  timestamp_utc?: Maybe<Scalars['String']['output']>;
  /** Data revision status (interim or final) */
  revision_status?: Maybe<Scalars['String']['output']>;
  /** Date in format "YYYY-MM-DD:HH". All datetime is in (UTC) */
  datetime?: Maybe<Scalars['String']['output']>;
  /** Sea level pressure (mb) */
  slp?: Maybe<Scalars['Float']['output']>;
  /** Pressure (mb) */
  pres?: Maybe<Scalars['Float']['output']>;
  /** Relative Humidity as a percentage (%) */
  rh?: Maybe<Scalars['Int']['output']>;
  /** Dew point (Default Celcius) */
  dewpt?: Maybe<Scalars['Float']['output']>;
  /** Temperature (Default Celcius) */
  temp?: Maybe<Scalars['Float']['output']>;
  /** Apparent Temperature or Wind Chill/Heat Index (Default Celcius) */
  app_temp?: Maybe<Scalars['Float']['output']>;
  /** Wind Speed (Default m/s) */
  wind_spd?: Maybe<Scalars['Float']['output']>;
  /** Wind Gust Speed - Default (m/s) */
  wind_gust_spd?: Maybe<Scalars['Float']['output']>;
  /** Wind direction (Degrees) */
  wind_dir?: Maybe<Scalars['Int']['output']>;
  /** UV Index (1-11+) */
  uv?: Maybe<Scalars['Float']['output']>;
  /** Estimated solar radiation (W/m^2) */
  solar_rad?: Maybe<Scalars['Float']['output']>;
  /** Global horizontal solar irradiance (W/m^2) */
  ghi?: Maybe<Scalars['Float']['output']>;
  /** Diffuse normal solar irradiance (W/m^2) */
  dhi?: Maybe<Scalars['Float']['output']>;
  /** Direct normal solar irradiance (W/m^2) */
  dni?: Maybe<Scalars['Float']['output']>;
  /** Solar hour angle (Degrees) */
  h_angle?: Maybe<Scalars['Float']['output']>;
  /** Solar elevation angle (Degrees) */
  elev_angle?: Maybe<Scalars['Float']['output']>;
  /** Azimuth angle (Degrees) */
  azimuth?: Maybe<Scalars['Float']['output']>;
  /** Visibility (KM) */
  vis?: Maybe<Scalars['Float']['output']>;
  /** Part of the day (d = day, n = night) */
  pod?: Maybe<Scalars['String']['output']>;
  weather?: Maybe<query_history_hourly_data_items_weather>;
  /** Cloud Cover 0-100 (%) */
  clouds?: Maybe<Scalars['Int']['output']>;
  /** Liquid equivalent precipitation - Default (mm) */
  precip?: Maybe<Scalars['Float']['output']>;
  /** Snowfall - Default (mm) */
  snow?: Maybe<Scalars['Float']['output']>;
};

export type query_history_hourly_data_items_weather = {
  /** Icon code for forecast image display */
  icon?: Maybe<Scalars['String']['output']>;
  /** Weather Condition code */
  code?: Maybe<Scalars['Int']['output']>;
  /** Weather Condition description */
  description?: Maybe<Scalars['String']['output']>;
};

/** Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> */
export type queryInput_history_hourly_units =
  | 'S'
  | 'I';

/** Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a> */
export type queryInput_history_hourly_lang =
  | 'ar'
  | 'az'
  | 'be'
  | 'bg'
  | 'bs'
  | 'ca'
  | 'cs'
  | 'de'
  | 'fi'
  | 'fr'
  | 'el'
  | 'es'
  | 'et'
  | 'hr'
  | 'hu'
  | 'id'
  | 'it'
  | 'is'
  | 'kw'
  | 'nb'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'sl'
  | 'sr'
  | 'sv'
  | 'tr'
  | 'uk'
  | 'zh'
  | 'zh_tw';

/** Assume utc (default) or local time for start_date, end_date */
export type queryInput_history_hourly_tz =
  | 'local'
  | 'utc';

export type HistorySubhourly = {
  /** City name (Closest) */
  city_name?: Maybe<Scalars['String']['output']>;
  /** State abbreviation */
  state_code?: Maybe<Scalars['String']['output']>;
  /** Country abbreviation */
  country_code?: Maybe<Scalars['String']['output']>;
  /** Local IANA time zone */
  timezone?: Maybe<Scalars['String']['output']>;
  /** Latitude */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Longitude */
  lon?: Maybe<Scalars['Float']['output']>;
  /** List of data sources used in response */
  sources?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  data?: Maybe<Array<Maybe<HistoryObj>>>;
};

/** Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> */
export type queryInput_history_subhourly_units =
  | 'S'
  | 'I';

/** Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a> */
export type queryInput_history_subhourly_lang =
  | 'ar'
  | 'az'
  | 'be'
  | 'bg'
  | 'bs'
  | 'ca'
  | 'cs'
  | 'de'
  | 'fi'
  | 'fr'
  | 'el'
  | 'es'
  | 'et'
  | 'hr'
  | 'hu'
  | 'id'
  | 'it'
  | 'is'
  | 'kw'
  | 'nb'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'sl'
  | 'sr'
  | 'sv'
  | 'tr'
  | 'uk'
  | 'zh'
  | 'zh_tw';

/** Assume utc (default) or local time for start_date, end_date */
export type queryInput_history_subhourly_tz =
  | 'local'
  | 'utc';

export type EnergyObsGroupForecast = {
  /** City name (closest) */
  city_name?: Maybe<Scalars['String']['output']>;
  /** State abbreviation */
  state_code?: Maybe<Scalars['String']['output']>;
  /** Country abbreviation */
  country_code?: Maybe<Scalars['String']['output']>;
  /** Local IANA time zone */
  timezone?: Maybe<Scalars['String']['output']>;
  /** Latitude */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Longitude */
  lon?: Maybe<Scalars['Float']['output']>;
  /** Degree day threshold units */
  threshold_units?: Maybe<Scalars['String']['output']>;
  /** Degree day threshold */
  threshold_value?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Array<Maybe<EnergyObsSeries>>>;
};

export type EnergyObsSeries = {
  /** Date */
  date?: Maybe<Scalars['Date']['output']>;
  /** Cooling degree days */
  cdd?: Maybe<Scalars['Float']['output']>;
  /** Heating degree days */
  hdd?: Maybe<Scalars['Float']['output']>;
  /** Average Relative humidity (%) */
  rh?: Maybe<Scalars['Int']['output']>;
  /** Average dew point temperature - Default (C) */
  dewpt?: Maybe<Scalars['Float']['output']>;
  /** Average wind direction (Degrees) */
  wind_dir?: Maybe<Scalars['Int']['output']>;
  /** Average wind speed - Default (m/s) */
  wind_spd?: Maybe<Scalars['Float']['output']>;
  /** Average temperature - Default (C) */
  temp?: Maybe<Scalars['Float']['output']>;
  /** Average cloud cover (%) */
  clouds?: Maybe<Scalars['Int']['output']>;
  /** Total global horizontal solar irradiance (W/m^2) */
  t_ghi?: Maybe<Scalars['Float']['output']>;
  /** Total diffuse horizontal solar irradiance (W/m^2) */
  t_dhi?: Maybe<Scalars['Float']['output']>;
  /** Total direct normal solar irradiance (W/m^2) */
  t_dni?: Maybe<Scalars['Float']['output']>;
  /** Average number of daily sun hours - # hours where Solar GHI > 1000 W/m^2 */
  sun_hours?: Maybe<Scalars['Float']['output']>;
  /** Total precipitation in period - Default (mm) */
  precip?: Maybe<Scalars['Float']['output']>;
  /** Total snowfall in period - Default (mm) */
  snow?: Maybe<Scalars['Float']['output']>;
};

/** Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> */
export type queryInput_forecast_energy_units =
  | 'S'
  | 'I';

/** Time period (default: daily) */
export type queryInput_forecast_energy_tp =
  | 'hourly'
  | 'daily';

export type EnergyObsGroup = {
  /** Count of found observations */
  count?: Maybe<Scalars['Int']['output']>;
  /** Start Date */
  start_date?: Maybe<Scalars['Int']['output']>;
  /** End Date */
  end_date?: Maybe<Scalars['Int']['output']>;
  data?: Maybe<Array<Maybe<EnergyObs>>>;
};

export type EnergyObs = {
  /** City name (closest) */
  city_name?: Maybe<Scalars['String']['output']>;
  /** State abbreviation */
  state_code?: Maybe<Scalars['String']['output']>;
  /** Country abbreviation */
  country_code?: Maybe<Scalars['String']['output']>;
  /** Local IANA time zone */
  timezone?: Maybe<Scalars['String']['output']>;
  /** Latitude */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Longitude */
  lon?: Maybe<Scalars['Float']['output']>;
  /** Nearest Station ID [DEPRECATED] */
  station_id?: Maybe<Scalars['String']['output']>;
  /** List of data sources used in response */
  sources?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Cooling degree days */
  cdd?: Maybe<Scalars['Float']['output']>;
  /** Heating degree days */
  hdd?: Maybe<Scalars['Float']['output']>;
  /** Average Relative humidity (%) */
  rh?: Maybe<Scalars['Int']['output']>;
  /** Average dew point temperature - Default (C) */
  dewpt?: Maybe<Scalars['Float']['output']>;
  /** Average wind direction (Degrees) */
  wind_dir?: Maybe<Scalars['Int']['output']>;
  /** Average wind speed - Default (m/s) */
  wind_spd?: Maybe<Scalars['Float']['output']>;
  /** Average temperature - Default (C) */
  temp?: Maybe<Scalars['Float']['output']>;
  /** Average cloud cover (%) */
  clouds?: Maybe<Scalars['Int']['output']>;
  /** Total global horizontal solar irradiance (W/m^2) */
  t_ghi?: Maybe<Scalars['Float']['output']>;
  /** Total diffuse horizontal solar irradiance (W/m^2) */
  t_dhi?: Maybe<Scalars['Float']['output']>;
  /** Total direct normal solar irradiance (W/m^2) */
  t_dni?: Maybe<Scalars['Float']['output']>;
  /** Average number of daily sun hours - # hours where Solar GHI > 1000 W/m^2 */
  sun_hours?: Maybe<Scalars['Float']['output']>;
  /** Total precipitation in period - Default (mm) */
  precip?: Maybe<Scalars['Float']['output']>;
  /** Total snowfall in period - Default (mm) */
  snow?: Maybe<Scalars['Float']['output']>;
};

/** Time period to aggregate by (daily, monthly) */
export type queryInput_history_energy_tp =
  | 'hourly'
  | 'daily'
  | 'monthly';

/** Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> */
export type queryInput_history_energy_units =
  | 'S'
  | 'I';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Populated_Places_Response: ResolverTypeWrapper<Populated_Places_Response>;
  CitiesError: ResolverTypeWrapper<CitiesError>;
  ErrorCode: ErrorCode;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Link: ResolverTypeWrapper<Link>;
  Metadata: ResolverTypeWrapper<Metadata>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  PopulatedPlaceSummary: ResolverTypeWrapper<PopulatedPlaceSummary>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  PopulatedPlaceType: PopulatedPlaceType;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Populated_Place_Response: ResolverTypeWrapper<Populated_Place_Response>;
  Populated_Place_Details: ResolverTypeWrapper<Populated_Place_Details>;
  Date_Time_Response: ResolverTypeWrapper<Date_Time_Response>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Distance_Response: ResolverTypeWrapper<Distance_Response>;
  Time_Response: ResolverTypeWrapper<Time_Response>;
  Countries_Response: ResolverTypeWrapper<Countries_Response>;
  Country_Summary: ResolverTypeWrapper<Country_Summary>;
  Country_Response: ResolverTypeWrapper<Country_Response>;
  Country_Details: ResolverTypeWrapper<Country_Details>;
  Country_Regions_Response: ResolverTypeWrapper<Country_Regions_Response>;
  Country_Region_Summary: ResolverTypeWrapper<Country_Region_Summary>;
  Country_Region_Response: ResolverTypeWrapper<Country_Region_Response>;
  Country_Region_Details: ResolverTypeWrapper<Country_Region_Details>;
  Currencies_Response: ResolverTypeWrapper<Currencies_Response>;
  Currency: ResolverTypeWrapper<Currency>;
  Languages_Response: ResolverTypeWrapper<Languages_Response>;
  Language: ResolverTypeWrapper<Language>;
  query_getLanguagesUsingGET_allOf_1_data_items_code: query_getLanguagesUsingGET_allOf_1_data_items_code;
  Locales_Response: ResolverTypeWrapper<Locales_Response>;
  Locale: ResolverTypeWrapper<Locale>;
  Time_Zones_Response: ResolverTypeWrapper<Time_Zones_Response>;
  Time_Zone: ResolverTypeWrapper<Time_Zone>;
  Time_Zone_Response: ResolverTypeWrapper<Time_Zone_Response>;
  ObjMap: ResolverTypeWrapper<Scalars['ObjMap']['output']>;
  HTTPMethod: HTTPMethod;
  WeatherAlert: ResolverTypeWrapper<WeatherAlert>;
  WeatherAlertGroup: ResolverTypeWrapper<WeatherAlertGroup>;
  URL: ResolverTypeWrapper<Scalars['URL']['output']>;
  CurrentObsGroup: ResolverTypeWrapper<CurrentObsGroup>;
  CurrentObs: ResolverTypeWrapper<CurrentObs>;
  query_current_data_items_weather: ResolverTypeWrapper<query_current_data_items_weather>;
  queryInput_current_include: queryInput_current_include;
  queryInput_current_units: queryInput_current_units;
  queryInput_current_lang: queryInput_current_lang;
  ForecastDay: ResolverTypeWrapper<ForecastDay>;
  Forecast: ResolverTypeWrapper<Forecast>;
  query_forecast_daily_data_items_weather: ResolverTypeWrapper<query_forecast_daily_data_items_weather>;
  queryInput_forecast_daily_units: queryInput_forecast_daily_units;
  queryInput_forecast_daily_lang: queryInput_forecast_daily_lang;
  FCMinutely: ResolverTypeWrapper<FCMinutely>;
  FCMinutelyOb: ResolverTypeWrapper<FCMinutelyOb>;
  queryInput_forecast_minutely_units: queryInput_forecast_minutely_units;
  AQHourly: ResolverTypeWrapper<AQHourly>;
  AQHour: ResolverTypeWrapper<AQHour>;
  AQCurrentGroup: ResolverTypeWrapper<AQCurrentGroup>;
  AQCurrent: ResolverTypeWrapper<AQCurrent>;
  ForecastHourly: ResolverTypeWrapper<ForecastHourly>;
  ForecastHour: ResolverTypeWrapper<ForecastHour>;
  query_forecast_hourly_data_items_weather: ResolverTypeWrapper<query_forecast_hourly_data_items_weather>;
  queryInput_forecast_hourly_units: queryInput_forecast_hourly_units;
  queryInput_forecast_hourly_lang: queryInput_forecast_hourly_lang;
  ForecastAG: ResolverTypeWrapper<ForecastAG>;
  HistoryAGObj: ResolverTypeWrapper<HistoryAGObj>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  queryInput_forecast_agweather_units: queryInput_forecast_agweather_units;
  HistoryAG: ResolverTypeWrapper<HistoryAG>;
  queryInput_history_agweather_tp: queryInput_history_agweather_tp;
  queryInput_history_agweather_units: queryInput_history_agweather_units;
  Normals: ResolverTypeWrapper<Normals>;
  NormalsObj: ResolverTypeWrapper<NormalsObj>;
  queryInput_normals_tp: queryInput_normals_tp;
  queryInput_normals_units: queryInput_normals_units;
  HistoryDay: ResolverTypeWrapper<HistoryDay>;
  HistoryDayObj: ResolverTypeWrapper<HistoryDayObj>;
  queryInput_history_daily_units: queryInput_history_daily_units;
  queryInput_history_daily_lang: queryInput_history_daily_lang;
  History: ResolverTypeWrapper<History>;
  HistoryObj: ResolverTypeWrapper<HistoryObj>;
  query_history_hourly_data_items_weather: ResolverTypeWrapper<query_history_hourly_data_items_weather>;
  queryInput_history_hourly_units: queryInput_history_hourly_units;
  queryInput_history_hourly_lang: queryInput_history_hourly_lang;
  queryInput_history_hourly_tz: queryInput_history_hourly_tz;
  HistorySubhourly: ResolverTypeWrapper<HistorySubhourly>;
  queryInput_history_subhourly_units: queryInput_history_subhourly_units;
  queryInput_history_subhourly_lang: queryInput_history_subhourly_lang;
  queryInput_history_subhourly_tz: queryInput_history_subhourly_tz;
  EnergyObsGroupForecast: ResolverTypeWrapper<EnergyObsGroupForecast>;
  EnergyObsSeries: ResolverTypeWrapper<EnergyObsSeries>;
  queryInput_forecast_energy_units: queryInput_forecast_energy_units;
  queryInput_forecast_energy_tp: queryInput_forecast_energy_tp;
  EnergyObsGroup: ResolverTypeWrapper<EnergyObsGroup>;
  EnergyObs: ResolverTypeWrapper<EnergyObs>;
  queryInput_history_energy_tp: queryInput_history_energy_tp;
  queryInput_history_energy_units: queryInput_history_energy_units;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  ResolveToSourceArgs: ResolverTypeWrapper<Scalars['ResolveToSourceArgs']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Populated_Places_Response: Populated_Places_Response;
  CitiesError: CitiesError;
  String: Scalars['String']['output'];
  Link: Link;
  Metadata: Metadata;
  BigInt: Scalars['BigInt']['output'];
  PopulatedPlaceSummary: PopulatedPlaceSummary;
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  Boolean: Scalars['Boolean']['output'];
  Populated_Place_Response: Populated_Place_Response;
  Populated_Place_Details: Populated_Place_Details;
  Date_Time_Response: Date_Time_Response;
  DateTime: Scalars['DateTime']['output'];
  Distance_Response: Distance_Response;
  Time_Response: Time_Response;
  Countries_Response: Countries_Response;
  Country_Summary: Country_Summary;
  Country_Response: Country_Response;
  Country_Details: Country_Details;
  Country_Regions_Response: Country_Regions_Response;
  Country_Region_Summary: Country_Region_Summary;
  Country_Region_Response: Country_Region_Response;
  Country_Region_Details: Country_Region_Details;
  Currencies_Response: Currencies_Response;
  Currency: Currency;
  Languages_Response: Languages_Response;
  Language: Language;
  Locales_Response: Locales_Response;
  Locale: Locale;
  Time_Zones_Response: Time_Zones_Response;
  Time_Zone: Time_Zone;
  Time_Zone_Response: Time_Zone_Response;
  ObjMap: Scalars['ObjMap']['output'];
  WeatherAlert: WeatherAlert;
  WeatherAlertGroup: WeatherAlertGroup;
  URL: Scalars['URL']['output'];
  CurrentObsGroup: CurrentObsGroup;
  CurrentObs: CurrentObs;
  query_current_data_items_weather: query_current_data_items_weather;
  ForecastDay: ForecastDay;
  Forecast: Forecast;
  query_forecast_daily_data_items_weather: query_forecast_daily_data_items_weather;
  FCMinutely: FCMinutely;
  FCMinutelyOb: FCMinutelyOb;
  AQHourly: AQHourly;
  AQHour: AQHour;
  AQCurrentGroup: AQCurrentGroup;
  AQCurrent: AQCurrent;
  ForecastHourly: ForecastHourly;
  ForecastHour: ForecastHour;
  query_forecast_hourly_data_items_weather: query_forecast_hourly_data_items_weather;
  ForecastAG: ForecastAG;
  HistoryAGObj: HistoryAGObj;
  Date: Scalars['Date']['output'];
  HistoryAG: HistoryAG;
  Normals: Normals;
  NormalsObj: NormalsObj;
  HistoryDay: HistoryDay;
  HistoryDayObj: HistoryDayObj;
  History: History;
  HistoryObj: HistoryObj;
  query_history_hourly_data_items_weather: query_history_hourly_data_items_weather;
  HistorySubhourly: HistorySubhourly;
  EnergyObsGroupForecast: EnergyObsGroupForecast;
  EnergyObsSeries: EnergyObsSeries;
  EnergyObsGroup: EnergyObsGroup;
  EnergyObs: EnergyObs;
  JSON: Scalars['JSON']['output'];
  ResolveToSourceArgs: Scalars['ResolveToSourceArgs']['output'];
}>;

export type enumDirectiveArgs = {
  value?: Maybe<Scalars['String']['input']>;
};

export type enumDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = enumDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type globalOptionsDirectiveArgs = {
  sourceName?: Maybe<Scalars['String']['input']>;
  endpoint?: Maybe<Scalars['String']['input']>;
  operationHeaders?: Maybe<Scalars['ObjMap']['input']>;
  queryStringOptions?: Maybe<Scalars['ObjMap']['input']>;
  queryParams?: Maybe<Scalars['ObjMap']['input']>;
};

export type globalOptionsDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = globalOptionsDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type httpOperationDirectiveArgs = {
  path?: Maybe<Scalars['String']['input']>;
  operationSpecificHeaders?: Maybe<Scalars['ObjMap']['input']>;
  httpMethod?: Maybe<HTTPMethod>;
  isBinary?: Maybe<Scalars['Boolean']['input']>;
  requestBaseBody?: Maybe<Scalars['ObjMap']['input']>;
  queryParamArgMap?: Maybe<Scalars['ObjMap']['input']>;
  queryStringOptionsByParam?: Maybe<Scalars['ObjMap']['input']>;
};

export type httpOperationDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = httpOperationDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type resolveToDirectiveArgs = {
  requiredSelectionSet?: Maybe<Scalars['String']['input']>;
  sourceName: Scalars['String']['input'];
  sourceTypeName: Scalars['String']['input'];
  sourceFieldName: Scalars['String']['input'];
  sourceSelectionSet?: Maybe<Scalars['String']['input']>;
  sourceArgs?: Maybe<Scalars['ResolveToSourceArgs']['input']>;
  keyField?: Maybe<Scalars['String']['input']>;
  keysArg?: Maybe<Scalars['String']['input']>;
  pubsubTopic?: Maybe<Scalars['String']['input']>;
  filterBy?: Maybe<Scalars['String']['input']>;
  additionalArgs?: Maybe<Scalars['ResolveToSourceArgs']['input']>;
  result?: Maybe<Scalars['String']['input']>;
  resultType?: Maybe<Scalars['String']['input']>;
};

export type resolveToDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = resolveToDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  findAdminDivisionsUsingGET?: Resolver<Maybe<ResolversTypes['Populated_Places_Response']>, ParentType, ContextType, RequireFields<QueryfindAdminDivisionsUsingGETArgs, 'distanceUnit' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  getAdminDivisionUsingGET?: Resolver<Maybe<ResolversTypes['Populated_Place_Response']>, ParentType, ContextType, RequireFields<QuerygetAdminDivisionUsingGETArgs, 'divisionId'>>;
  findCitiesNearAdminDivisionUsingGET?: Resolver<Maybe<ResolversTypes['Populated_Places_Response']>, ParentType, ContextType, RequireFields<QueryfindCitiesNearAdminDivisionUsingGETArgs, 'divisionId' | 'distanceUnit' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  findDivisionsNearAdminDivisionUsingGET?: Resolver<Maybe<ResolversTypes['Populated_Places_Response']>, ParentType, ContextType, RequireFields<QueryfindDivisionsNearAdminDivisionUsingGETArgs, 'divisionId' | 'distanceUnit' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  findCitiesUsingGET?: Resolver<Maybe<ResolversTypes['Populated_Places_Response']>, ParentType, ContextType, RequireFields<QueryfindCitiesUsingGETArgs, 'distanceUnit' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  getCityUsingGET?: Resolver<Maybe<ResolversTypes['Populated_Place_Response']>, ParentType, ContextType, RequireFields<QuerygetCityUsingGETArgs, 'cityId'>>;
  getCityDateTimeUsingGET?: Resolver<Maybe<ResolversTypes['Date_Time_Response']>, ParentType, ContextType, RequireFields<QuerygetCityDateTimeUsingGETArgs, 'cityId'>>;
  getCityDistanceUsingGET?: Resolver<Maybe<ResolversTypes['Distance_Response']>, ParentType, ContextType, RequireFields<QuerygetCityDistanceUsingGETArgs, 'cityId' | 'toCityId' | 'distanceUnit'>>;
  getCityLocatedInUsingGET?: Resolver<Maybe<ResolversTypes['Populated_Place_Response']>, ParentType, ContextType, RequireFields<QuerygetCityLocatedInUsingGETArgs, 'cityId'>>;
  findCitiesNearCityUsingGET?: Resolver<Maybe<ResolversTypes['Populated_Places_Response']>, ParentType, ContextType, RequireFields<QueryfindCitiesNearCityUsingGETArgs, 'cityId' | 'distanceUnit' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  getCityTimeUsingGET?: Resolver<Maybe<ResolversTypes['Time_Response']>, ParentType, ContextType, RequireFields<QuerygetCityTimeUsingGETArgs, 'cityId'>>;
  getCountriesUsingGET?: Resolver<Maybe<ResolversTypes['Countries_Response']>, ParentType, ContextType, RequireFields<QuerygetCountriesUsingGETArgs, 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit'>>;
  getCountryUsingGET?: Resolver<Maybe<ResolversTypes['Country_Response']>, ParentType, ContextType, RequireFields<QuerygetCountryUsingGETArgs, 'countryId'>>;
  getRegionsUsingGET?: Resolver<Maybe<ResolversTypes['Country_Regions_Response']>, ParentType, ContextType, RequireFields<QuerygetRegionsUsingGETArgs, 'countryId' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit'>>;
  getRegionUsingGET?: Resolver<Maybe<ResolversTypes['Country_Region_Response']>, ParentType, ContextType, RequireFields<QuerygetRegionUsingGETArgs, 'countryId' | 'regionCode'>>;
  findRegionDivisionsUsingGET?: Resolver<Maybe<ResolversTypes['Populated_Places_Response']>, ParentType, ContextType, RequireFields<QueryfindRegionDivisionsUsingGETArgs, 'countryId' | 'regionCode' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  findRegionCitiesUsingGET?: Resolver<Maybe<ResolversTypes['Populated_Places_Response']>, ParentType, ContextType, RequireFields<QueryfindRegionCitiesUsingGETArgs, 'countryId' | 'regionCode' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  findCitiesNearLocationUsingGET?: Resolver<Maybe<ResolversTypes['Populated_Places_Response']>, ParentType, ContextType, RequireFields<QueryfindCitiesNearLocationUsingGETArgs, 'locationId' | 'distanceUnit' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  findDivisionsNearLocationUsingGET?: Resolver<Maybe<ResolversTypes['Populated_Places_Response']>, ParentType, ContextType, RequireFields<QueryfindDivisionsNearLocationUsingGETArgs, 'locationId' | 'distanceUnit' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  getCurrenciesUsingGET?: Resolver<Maybe<ResolversTypes['Currencies_Response']>, ParentType, ContextType, RequireFields<QuerygetCurrenciesUsingGETArgs, 'countryId' | 'hateoasMode' | 'limit'>>;
  getLanguagesUsingGET?: Resolver<Maybe<ResolversTypes['Languages_Response']>, ParentType, ContextType, RequireFields<QuerygetLanguagesUsingGETArgs, 'hateoasMode' | 'limit'>>;
  getLocalesUsingGET?: Resolver<Maybe<ResolversTypes['Locales_Response']>, ParentType, ContextType, RequireFields<QuerygetLocalesUsingGETArgs, 'hateoasMode' | 'limit'>>;
  getTimezonesUsingGET?: Resolver<Maybe<ResolversTypes['Time_Zones_Response']>, ParentType, ContextType, RequireFields<QuerygetTimezonesUsingGETArgs, 'hateoasMode' | 'limit'>>;
  getTimeZoneUsingGET?: Resolver<Maybe<ResolversTypes['Time_Zone_Response']>, ParentType, ContextType, RequireFields<QuerygetTimeZoneUsingGETArgs, 'zoneId'>>;
  getTimeZoneDateTimeUsingGET?: Resolver<Maybe<ResolversTypes['Date_Time_Response']>, ParentType, ContextType, RequireFields<QuerygetTimeZoneDateTimeUsingGETArgs, 'zoneId'>>;
  getTimeZoneTimeUsingGET?: Resolver<Maybe<ResolversTypes['Time_Response']>, ParentType, ContextType, RequireFields<QuerygetTimeZoneTimeUsingGETArgs, 'zoneId'>>;
  alerts?: Resolver<Maybe<ResolversTypes['WeatherAlert']>, ParentType, ContextType, RequireFields<QueryalertsArgs, 'key'>>;
  current?: Resolver<Maybe<ResolversTypes['CurrentObsGroup']>, ParentType, ContextType, RequireFields<QuerycurrentArgs, 'key'>>;
  forecast_daily?: Resolver<Maybe<ResolversTypes['ForecastDay']>, ParentType, ContextType, RequireFields<Queryforecast_dailyArgs, 'key'>>;
  forecast_minutely?: Resolver<Maybe<ResolversTypes['FCMinutely']>, ParentType, ContextType, RequireFields<Queryforecast_minutelyArgs, 'key'>>;
  forecast_airquality?: Resolver<Maybe<ResolversTypes['AQHourly']>, ParentType, ContextType, RequireFields<Queryforecast_airqualityArgs, 'key'>>;
  history_airquality?: Resolver<Maybe<ResolversTypes['AQCurrentGroup']>, ParentType, ContextType, RequireFields<Queryhistory_airqualityArgs, 'key'>>;
  current_airquality?: Resolver<Maybe<ResolversTypes['AQCurrentGroup']>, ParentType, ContextType, RequireFields<Querycurrent_airqualityArgs, 'key'>>;
  forecast_hourly?: Resolver<Maybe<ResolversTypes['ForecastHourly']>, ParentType, ContextType, RequireFields<Queryforecast_hourlyArgs, 'key'>>;
  forecast_agweather?: Resolver<Maybe<ResolversTypes['ForecastAG']>, ParentType, ContextType, RequireFields<Queryforecast_agweatherArgs, 'start_date' | 'end_date' | 'key'>>;
  history_agweather?: Resolver<Maybe<ResolversTypes['HistoryAG']>, ParentType, ContextType, RequireFields<Queryhistory_agweatherArgs, 'start_date' | 'end_date' | 'tp' | 'key'>>;
  normals?: Resolver<Maybe<ResolversTypes['Normals']>, ParentType, ContextType, RequireFields<QuerynormalsArgs, 'lat' | 'lon' | 'start_day' | 'end_day' | 'tp' | 'series_year' | 'key'>>;
  history_daily?: Resolver<Maybe<ResolversTypes['HistoryDay']>, ParentType, ContextType, RequireFields<Queryhistory_dailyArgs, 'start_date' | 'end_date' | 'key'>>;
  history_hourly?: Resolver<Maybe<ResolversTypes['History']>, ParentType, ContextType, RequireFields<Queryhistory_hourlyArgs, 'start_date' | 'end_date' | 'key'>>;
  history_subhourly?: Resolver<Maybe<ResolversTypes['HistorySubhourly']>, ParentType, ContextType, RequireFields<Queryhistory_subhourlyArgs, 'start_date' | 'end_date' | 'key'>>;
  forecast_energy?: Resolver<Maybe<ResolversTypes['EnergyObsGroupForecast']>, ParentType, ContextType, RequireFields<Queryforecast_energyArgs, 'key'>>;
  history_energy?: Resolver<Maybe<ResolversTypes['EnergyObsGroup']>, ParentType, ContextType, RequireFields<Queryhistory_energyArgs, 'lat' | 'lon' | 'start_date' | 'end_date' | 'key'>>;
  bulk_files?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<Querybulk_filesArgs, 'key'>>;
}>;

export type Populated_Places_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Populated_Places_Response'] = ResolversParentTypes['Populated_Places_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitiesError']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['PopulatedPlaceSummary']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CitiesErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CitiesError'] = ResolversParentTypes['CitiesError']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['ErrorCode']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LinkResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Link'] = ResolversParentTypes['Link']> = ResolversObject<{
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MetadataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Metadata'] = ResolversParentTypes['Metadata']> = ResolversObject<{
  currentOffset?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type PopulatedPlaceSummaryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PopulatedPlaceSummary'] = ResolversParentTypes['PopulatedPlaceSummary']> = ResolversObject<{
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  distance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  population?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  regionCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['PopulatedPlaceType']>, ParentType, ContextType>;
  wikiDataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dailyForecast?: Resolver<Maybe<Array<Maybe<ResolversTypes['Forecast']>>>, ParentType, ContextType>;
  todayForecast?: Resolver<Maybe<ResolversTypes['Forecast']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Populated_Place_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Populated_Place_Response'] = ResolversParentTypes['Populated_Place_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitiesError']>>>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['Populated_Place_Details']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Populated_Place_DetailsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Populated_Place_Details'] = ResolversParentTypes['Populated_Place_Details']> = ResolversObject<{
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  elevationMeters?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  population?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  regionCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['PopulatedPlaceType']>, ParentType, ContextType>;
  wikiDataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Date_Time_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Date_Time_Response'] = ResolversParentTypes['Date_Time_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitiesError']>>>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type Distance_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Distance_Response'] = ResolversParentTypes['Distance_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitiesError']>>>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Time_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Time_Response'] = ResolversParentTypes['Time_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitiesError']>>>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Countries_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Countries_Response'] = ResolversParentTypes['Countries_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitiesError']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Country_Summary']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Country_SummaryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Country_Summary'] = ResolversParentTypes['Country_Summary']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currencyCodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wikiDataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Country_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Country_Response'] = ResolversParentTypes['Country_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitiesError']>>>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['Country_Details']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Country_DetailsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Country_Details'] = ResolversParentTypes['Country_Details']> = ResolversObject<{
  callingCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currencyCodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  flagImageUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numRegions?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wikiDataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Country_Regions_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Country_Regions_Response'] = ResolversParentTypes['Country_Regions_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitiesError']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Country_Region_Summary']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Country_Region_SummaryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Country_Region_Summary'] = ResolversParentTypes['Country_Region_Summary']> = ResolversObject<{
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fipsCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isoCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wikiDataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Country_Region_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Country_Region_Response'] = ResolversParentTypes['Country_Region_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitiesError']>>>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['Country_Region_Details']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Country_Region_DetailsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Country_Region_Details'] = ResolversParentTypes['Country_Region_Details']> = ResolversObject<{
  capital?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fipsCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isoCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numCities?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wikiDataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Currencies_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Currencies_Response'] = ResolversParentTypes['Currencies_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitiesError']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Currency']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CurrencyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Currency'] = ResolversParentTypes['Currency']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Languages_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Languages_Response'] = ResolversParentTypes['Languages_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitiesError']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Language']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LanguageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Language'] = ResolversParentTypes['Language']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['query_getLanguagesUsingGET_allOf_1_data_items_code']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Locales_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Locales_Response'] = ResolversParentTypes['Locales_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitiesError']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Locale']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LocaleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Locale'] = ResolversParentTypes['Locale']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Time_Zones_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Time_Zones_Response'] = ResolversParentTypes['Time_Zones_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitiesError']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Time_Zone']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Time_ZoneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Time_Zone'] = ResolversParentTypes['Time_Zone']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rawUtcOffsetHours?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Time_Zone_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Time_Zone_Response'] = ResolversParentTypes['Time_Zone_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitiesError']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rawUtcOffsetHours?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface ObjMapScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjMap'], any> {
  name: 'ObjMap';
}

export type WeatherAlertResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WeatherAlert'] = ResolversParentTypes['WeatherAlert']> = ResolversObject<{
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  alerts?: Resolver<Maybe<Array<Maybe<ResolversTypes['WeatherAlertGroup']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WeatherAlertGroupResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WeatherAlertGroup'] = ResolversParentTypes['WeatherAlertGroup']> = ResolversObject<{
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  severity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  effective_utc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  effective_local?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expires_utc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expires_local?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uri?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  alerts?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface URLScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL';
}

export type CurrentObsGroupResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CurrentObsGroup'] = ResolversParentTypes['CurrentObsGroup']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['CurrentObs']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CurrentObsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CurrentObs'] = ResolversParentTypes['CurrentObs']> = ResolversObject<{
  city_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  station?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sources?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  vis?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rh?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  dewpt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wind_dir?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wind_cdir?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wind_cdir_full?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wind_speed?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gust?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  temp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  app_temp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  clouds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  weather?: Resolver<Maybe<ResolversTypes['query_current_data_items_weather']>, ParentType, ContextType>;
  datetime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ob_time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ts?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sunrise?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sunset?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pres?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  aqi?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  uv?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  solar_rad?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ghi?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dni?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dhi?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  elev_angle?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hour_angle?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  precip?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  snow?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_current_data_items_weatherResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_current_data_items_weather'] = ResolversParentTypes['query_current_data_items_weather']> = ResolversObject<{
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ForecastDayResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ForecastDay'] = ResolversParentTypes['ForecastDay']> = ResolversObject<{
  city_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Forecast']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ForecastResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Forecast'] = ResolversParentTypes['Forecast']> = ResolversObject<{
  ts?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  timestamp_local?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp_utc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  datetime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  snow?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  snow_depth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  precip?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  temp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dewpt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  max_temp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  min_temp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  app_max_temp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  app_min_temp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rh?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  clouds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  weather?: Resolver<Maybe<ResolversTypes['query_forecast_daily_data_items_weather']>, ParentType, ContextType>;
  slp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pres?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  uv?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  max_dhi?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  vis?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pop?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  moon_phase?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sunrise_ts?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sunset_ts?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  moonrise_ts?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  moonset_ts?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wind_spd?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wind_dir?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wind_cdir?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wind_cdir_full?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_forecast_daily_data_items_weatherResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_forecast_daily_data_items_weather'] = ResolversParentTypes['query_forecast_daily_data_items_weather']> = ResolversObject<{
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FCMinutelyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FCMinutely'] = ResolversParentTypes['FCMinutely']> = ResolversObject<{
  city_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['FCMinutelyOb']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FCMinutelyObResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FCMinutelyOb'] = ResolversParentTypes['FCMinutelyOb']> = ResolversObject<{
  timestamp_utc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp_local?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ts?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  precip?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  temp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  snow?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AQHourlyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AQHourly'] = ResolversParentTypes['AQHourly']> = ResolversObject<{
  city_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['AQHour']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AQHourResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AQHour'] = ResolversParentTypes['AQHour']> = ResolversObject<{
  ts?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  timestamp_local?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp_utc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  aqi?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  so2?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  no2?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  o3?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pm25?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pm10?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AQCurrentGroupResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AQCurrentGroup'] = ResolversParentTypes['AQCurrentGroup']> = ResolversObject<{
  city_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['AQCurrent']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AQCurrentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AQCurrent'] = ResolversParentTypes['AQCurrent']> = ResolversObject<{
  aqi?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  so2?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  no2?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  o3?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pm25?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pm10?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ForecastHourlyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ForecastHourly'] = ResolversParentTypes['ForecastHourly']> = ResolversObject<{
  city_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['ForecastHour']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ForecastHourResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ForecastHour'] = ResolversParentTypes['ForecastHour']> = ResolversObject<{
  ts?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  timestamp_local?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp_utc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  datetime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  snow?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  snow_depth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  precip?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  temp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dewpt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  app_temp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rh?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  clouds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  weather?: Resolver<Maybe<ResolversTypes['query_forecast_hourly_data_items_weather']>, ParentType, ContextType>;
  slp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pres?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  uv?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  solar_rad?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ghi?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dhi?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dni?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  vis?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pop?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wind_spd?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wind_gust_spd?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wind_dir?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wind_cdir?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wind_cdir_full?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_forecast_hourly_data_items_weatherResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_forecast_hourly_data_items_weather'] = ResolversParentTypes['query_forecast_hourly_data_items_weather']> = ResolversObject<{
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ForecastAGResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ForecastAG'] = ResolversParentTypes['ForecastAG']> = ResolversObject<{
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['HistoryAGObj']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HistoryAGObjResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HistoryAGObj'] = ResolversParentTypes['HistoryAGObj']> = ResolversObject<{
  bulk_soil_density?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dlwrf_avg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dlwrf_max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dlwrf_net?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dswrf_avg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dswrf_max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dswrf_net?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  evapotranspiration?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  precip?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pres_avg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  revision_status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  skin_temp_avg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  skin_temp_max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  skin_temp_min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  soilm_0_10cm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  soilm_100_200cm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  soilm_10_40cm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  soilm_40_100cm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  soilt_0_10cm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  soilt_100_200cm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  soilt_10_40cm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  soilt_40_100cm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  specific_humidity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  timestamp_local?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp_utc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  temp_2m_avg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  v_soilm_0_10cm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  v_soilm_100_200cm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  v_soilm_10_40cm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  v_soilm_40_100cm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  valid_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  wind_10m_spd_avg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type HistoryAGResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HistoryAG'] = ResolversParentTypes['HistoryAG']> = ResolversObject<{
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['HistoryAGObj']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NormalsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Normals'] = ResolversParentTypes['Normals']> = ResolversObject<{
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sources?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['NormalsObj']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NormalsObjResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NormalsObj'] = ResolversParentTypes['NormalsObj']> = ResolversObject<{
  day?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hour?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  temp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dewpt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  max_wind_spd?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  min_wind_spd?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wind_spd?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wind_dir?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  precip?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  snow?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HistoryDayResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HistoryDay'] = ResolversParentTypes['HistoryDay']> = ResolversObject<{
  city_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sources?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['HistoryDayObj']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HistoryDayObjResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HistoryDayObj'] = ResolversParentTypes['HistoryDayObj']> = ResolversObject<{
  datetime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  ts?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  revision_status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pres?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rh?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dewpt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  temp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  max_temp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  max_temp_ts?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  min_temp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  min_temp_ts?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wind_spd?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wind_dir?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wind_gust_spd?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  max_wind_spd?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  max_wind_dir?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  max_wind_spd_ts?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ghi?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  t_ghi?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  dni?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  t_dni?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  dhi?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  t_dhi?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  max_uv?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  precip?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  precip_gpm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  snow?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  snow_depth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HistoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['History'] = ResolversParentTypes['History']> = ResolversObject<{
  city_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sources?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['HistoryObj']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HistoryObjResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HistoryObj'] = ResolversParentTypes['HistoryObj']> = ResolversObject<{
  ts?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  timestamp_local?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp_utc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  revision_status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  datetime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pres?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rh?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  dewpt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  temp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  app_temp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wind_spd?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wind_gust_spd?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wind_dir?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  uv?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  solar_rad?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ghi?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dhi?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dni?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  h_angle?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  elev_angle?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  azimuth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  vis?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weather?: Resolver<Maybe<ResolversTypes['query_history_hourly_data_items_weather']>, ParentType, ContextType>;
  clouds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  precip?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  snow?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_history_hourly_data_items_weatherResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_history_hourly_data_items_weather'] = ResolversParentTypes['query_history_hourly_data_items_weather']> = ResolversObject<{
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HistorySubhourlyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HistorySubhourly'] = ResolversParentTypes['HistorySubhourly']> = ResolversObject<{
  city_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sources?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['HistoryObj']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EnergyObsGroupForecastResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EnergyObsGroupForecast'] = ResolversParentTypes['EnergyObsGroupForecast']> = ResolversObject<{
  city_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  threshold_units?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  threshold_value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['EnergyObsSeries']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EnergyObsSeriesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EnergyObsSeries'] = ResolversParentTypes['EnergyObsSeries']> = ResolversObject<{
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  cdd?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hdd?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rh?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  dewpt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wind_dir?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wind_spd?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  temp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  clouds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  t_ghi?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  t_dhi?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  t_dni?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sun_hours?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  precip?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  snow?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EnergyObsGroupResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EnergyObsGroup'] = ResolversParentTypes['EnergyObsGroup']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  start_date?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  end_date?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['EnergyObs']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EnergyObsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EnergyObs'] = ResolversParentTypes['EnergyObs']> = ResolversObject<{
  city_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  station_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sources?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  cdd?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hdd?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rh?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  dewpt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wind_dir?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wind_spd?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  temp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  clouds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  t_ghi?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  t_dhi?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  t_dni?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sun_hours?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  precip?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  snow?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface ResolveToSourceArgsScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ResolveToSourceArgs'], any> {
  name: 'ResolveToSourceArgs';
}

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Populated_Places_Response?: Populated_Places_ResponseResolvers<ContextType>;
  CitiesError?: CitiesErrorResolvers<ContextType>;
  Link?: LinkResolvers<ContextType>;
  Metadata?: MetadataResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  PopulatedPlaceSummary?: PopulatedPlaceSummaryResolvers<ContextType>;
  Populated_Place_Response?: Populated_Place_ResponseResolvers<ContextType>;
  Populated_Place_Details?: Populated_Place_DetailsResolvers<ContextType>;
  Date_Time_Response?: Date_Time_ResponseResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Distance_Response?: Distance_ResponseResolvers<ContextType>;
  Time_Response?: Time_ResponseResolvers<ContextType>;
  Countries_Response?: Countries_ResponseResolvers<ContextType>;
  Country_Summary?: Country_SummaryResolvers<ContextType>;
  Country_Response?: Country_ResponseResolvers<ContextType>;
  Country_Details?: Country_DetailsResolvers<ContextType>;
  Country_Regions_Response?: Country_Regions_ResponseResolvers<ContextType>;
  Country_Region_Summary?: Country_Region_SummaryResolvers<ContextType>;
  Country_Region_Response?: Country_Region_ResponseResolvers<ContextType>;
  Country_Region_Details?: Country_Region_DetailsResolvers<ContextType>;
  Currencies_Response?: Currencies_ResponseResolvers<ContextType>;
  Currency?: CurrencyResolvers<ContextType>;
  Languages_Response?: Languages_ResponseResolvers<ContextType>;
  Language?: LanguageResolvers<ContextType>;
  Locales_Response?: Locales_ResponseResolvers<ContextType>;
  Locale?: LocaleResolvers<ContextType>;
  Time_Zones_Response?: Time_Zones_ResponseResolvers<ContextType>;
  Time_Zone?: Time_ZoneResolvers<ContextType>;
  Time_Zone_Response?: Time_Zone_ResponseResolvers<ContextType>;
  ObjMap?: GraphQLScalarType;
  WeatherAlert?: WeatherAlertResolvers<ContextType>;
  WeatherAlertGroup?: WeatherAlertGroupResolvers<ContextType>;
  URL?: GraphQLScalarType;
  CurrentObsGroup?: CurrentObsGroupResolvers<ContextType>;
  CurrentObs?: CurrentObsResolvers<ContextType>;
  query_current_data_items_weather?: query_current_data_items_weatherResolvers<ContextType>;
  ForecastDay?: ForecastDayResolvers<ContextType>;
  Forecast?: ForecastResolvers<ContextType>;
  query_forecast_daily_data_items_weather?: query_forecast_daily_data_items_weatherResolvers<ContextType>;
  FCMinutely?: FCMinutelyResolvers<ContextType>;
  FCMinutelyOb?: FCMinutelyObResolvers<ContextType>;
  AQHourly?: AQHourlyResolvers<ContextType>;
  AQHour?: AQHourResolvers<ContextType>;
  AQCurrentGroup?: AQCurrentGroupResolvers<ContextType>;
  AQCurrent?: AQCurrentResolvers<ContextType>;
  ForecastHourly?: ForecastHourlyResolvers<ContextType>;
  ForecastHour?: ForecastHourResolvers<ContextType>;
  query_forecast_hourly_data_items_weather?: query_forecast_hourly_data_items_weatherResolvers<ContextType>;
  ForecastAG?: ForecastAGResolvers<ContextType>;
  HistoryAGObj?: HistoryAGObjResolvers<ContextType>;
  Date?: GraphQLScalarType;
  HistoryAG?: HistoryAGResolvers<ContextType>;
  Normals?: NormalsResolvers<ContextType>;
  NormalsObj?: NormalsObjResolvers<ContextType>;
  HistoryDay?: HistoryDayResolvers<ContextType>;
  HistoryDayObj?: HistoryDayObjResolvers<ContextType>;
  History?: HistoryResolvers<ContextType>;
  HistoryObj?: HistoryObjResolvers<ContextType>;
  query_history_hourly_data_items_weather?: query_history_hourly_data_items_weatherResolvers<ContextType>;
  HistorySubhourly?: HistorySubhourlyResolvers<ContextType>;
  EnergyObsGroupForecast?: EnergyObsGroupForecastResolvers<ContextType>;
  EnergyObsSeries?: EnergyObsSeriesResolvers<ContextType>;
  EnergyObsGroup?: EnergyObsGroupResolvers<ContextType>;
  EnergyObs?: EnergyObsResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  ResolveToSourceArgs?: GraphQLScalarType;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  enum?: enumDirectiveResolver<any, any, ContextType>;
  globalOptions?: globalOptionsDirectiveResolver<any, any, ContextType>;
  httpOperation?: httpOperationDirectiveResolver<any, any, ContextType>;
  resolveTo?: resolveToDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = CitiesTypes.Context & WeatherTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".mesh/sources/Cities/schemaWithAnnotations":
      return Promise.resolve(importedModule$0) as T;
    
    case ".mesh/sources/Weather/schemaWithAnnotations":
      return Promise.resolve(importedModule$1) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("🕸️  Mesh");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const citiesTransforms = [];
const weatherTransforms = [];
const citiesHandler = new OpenapiHandler({
              name: "Cities",
              config: {"source":"https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/mashape.com/geodb/1.0.0/swagger.yaml","ignoreErrorResponses":true,"operationHeaders":{"X-RapidAPI-Key":"f93d3b393dmsh13fea7cb6981b2ep1dba0ajsn654ffeb48c26"}},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("Cities"),
              logger: logger.child("Cities"),
              importFn,
            });
const weatherHandler = new OpenapiHandler({
              name: "Weather",
              config: {"source":"https://www.weatherbit.io/static/swagger.json","ignoreErrorResponses":true},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("Weather"),
              logger: logger.child("Weather"),
              importFn,
            });
const additionalTypeDefs = [parse("extend type PopulatedPlaceSummary {\n  dailyForecast: [Forecast] @resolveTo(requiredSelectionSet: \"\"\"\n  {\n     latitude\n     longitude\n   }\n  \"\"\", sourceName: \"Weather\", sourceTypeName: \"Query\", sourceFieldName: \"forecast_daily_by_lat_by_lon\", sourceArgs: {lat: \"{root.latitude}\", lon: \"{root.longitude}\", key: \"971a693de7ff47a89127664547988be5\"}, result: \"data\")\n  todayForecast: Forecast @resolveTo(requiredSelectionSet: \"\"\"\n  {\n     latitude\n     longitude\n   }\n  \"\"\", sourceName: \"Weather\", sourceTypeName: \"Query\", sourceFieldName: \"forecast_daily_by_lat_by_lon\", sourceArgs: {lat: \"{root.latitude}\", lon: \"{root.longitude}\", days: 1, key: \"971a693de7ff47a89127664547988be5\"}, result: \"data[0]\")\n}"),] as any[];
additionalEnvelopPlugins[0] = await UseResponseCache({
          ...({
  "ttlPerCoordinate": [
    {
      "coordinate": "Query.*",
      "ttl": 0
    },
    {
      "coordinate": "PopulatedPlaceSummary.dailyForecast",
      "ttl": 3600
    },
    {
      "coordinate": "PopulatedPlaceSummary.todayForecast",
      "ttl": 3600
    }
  ]
}),
          logger: logger.child("responseCache"),
          cache,
          pubsub,
          baseDir,
          importFn,
        })
citiesTransforms[0] = new RenameTransform({
                  apiName: "Cities",
                  config: [{"from":{"type":"Error"},"to":{"type":"CitiesError"}}],
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
weatherTransforms[0] = new RenameTransform({
                  apiName: "Weather",
                  config: [{"from":{"type":"Error"},"to":{"type":"WeatherError"}}],
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
sources[0] = {
          name: 'Cities',
          handler: citiesHandler,
          transforms: citiesTransforms
        }
sources[1] = {
          name: 'Weather',
          handler: weatherHandler,
          transforms: weatherTransforms
        }
const additionalResolvers = [] as any[]
additionalTypeDefs.unshift(parse(/* GraphQL */`
        scalar ResolveToSourceArgs
        directive @resolveTo(
          requiredSelectionSet: String
          sourceName: String!
          sourceTypeName: String!
          sourceFieldName: String!
          sourceSelectionSet: String
          sourceArgs: ResolveToSourceArgs
          keyField: String
          keysArg: String
          pubsubTopic: String
          filterBy: String
          additionalArgs: ResolveToSourceArgs
          result: String
          resultType: String
        ) on FIELD_DEFINITION
      `))
const additionalResolversFromTypeDefs = await resolveAdditionalResolvers(
          baseDir,
          [{"targetTypeName":"PopulatedPlaceSummary","targetFieldName":"dailyForecast","requiredSelectionSet":"{\n   latitude\n   longitude\n }","sourceName":"Weather","sourceTypeName":"Query","sourceFieldName":"forecast_daily_by_lat_by_lon","sourceArgs":{"lat":"{root.latitude}","lon":"{root.longitude}","key":"971a693de7ff47a89127664547988be5"},"result":"data"},{"targetTypeName":"PopulatedPlaceSummary","targetFieldName":"todayForecast","requiredSelectionSet":"{\n   latitude\n   longitude\n }","sourceName":"Weather","sourceTypeName":"Query","sourceFieldName":"forecast_daily_by_lat_by_lon","sourceArgs":{"lat":"{root.latitude}","lon":"{root.longitude}","days":1,"key":"971a693de7ff47a89127664547988be5"},"result":"data[0]"}],
          importFn,
          pubsub
        );
additionalResolvers.push(...additionalResolversFromTypeDefs)
const merger = new(StitchingMerger as any)({
        cache,
        pubsub,
        logger: logger.child('stitchingMerger'),
        store: rootStore.child('stitchingMerger')
      })
const documentHashMap = {
        "a54fc3674fda2961e3d43460c4a2650575297268f3fbfee58740efbff0b0aaf4": ExampleQueryDocument
      }
additionalEnvelopPlugins.push(usePersistedOperations({
        getPersistedOperation(key) {
          return documentHashMap[key];
        },
        ...{}
      }))

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: ExampleQueryDocument,
        get rawSDL() {
          return printWithCache(ExampleQueryDocument);
        },
        location: 'ExampleQueryDocument.graphql',
        sha256Hash: 'a54fc3674fda2961e3d43460c4a2650575297268f3fbfee58740efbff0b0aaf4'
      }
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltMesh,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export const pollingInterval = null;

export function getBuiltMesh(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    if (pollingInterval) {
      setInterval(() => {
        getMeshOptions()
        .then(meshOptions => getMesh(meshOptions))
        .then(newMesh =>
          meshInstance$.then(oldMesh => {
            oldMesh.destroy()
            meshInstance$ = Promise.resolve(newMesh)
          })
        ).catch(err => {
          console.error("Mesh polling failed so the existing version will be used:", err);
        });
      }, pollingInterval)
    }
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));
export function getMeshSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltMesh().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type exampleQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type exampleQueryQuery = { findCitiesUsingGET?: Maybe<{ data?: Maybe<Array<Maybe<(
      Pick<PopulatedPlaceSummary, 'name'>
      & { todayForecast?: Maybe<Pick<Forecast, 'min_temp' | 'max_temp'>> }
    )>>> }> };


export const exampleQueryDocument = gql`
    query exampleQuery {
  findCitiesUsingGET(namePrefix: "Istanbul") {
    data {
      name
      todayForecast {
        min_temp
        max_temp
      }
    }
  }
}
    ` as unknown as DocumentNode<exampleQueryQuery, exampleQueryQueryVariables>;


export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    exampleQuery(variables?: exampleQueryQueryVariables, options?: C): Promise<exampleQueryQuery> {
      return requester<exampleQueryQuery, exampleQueryQueryVariables>(exampleQueryDocument, variables, options) as Promise<exampleQueryQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;