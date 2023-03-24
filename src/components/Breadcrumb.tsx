import React, { useEffect } from "react";
import { Breadcrumb } from "antd";
import { Link, useLocation, matchRoutes, RouteMatch } from "react-router-dom";
import { IRoute, layoutRoutesConfig as routes } from "@/router/routes";
import Icon, { IconType } from "@/components/Icons";
import useLayoutConfig from "@/store/useLayoutConfig";

type BreadcrumbItem = string | { name: string; path?: string; icon?: IconType };

export type BreadcrumbType = Array<BreadcrumbItem>;

/**
 * Layout面包屑
 * @param {BreadcrumbType} data
 * @returns
 */
const LayoutBreadcrumb = () => {
    const breadcrumb: BreadcrumbType = useLayoutConfig(
        (state: any) => state.layoutConfig.breadcrumb
    );
    useBreadcrumbFormRoutes({ routes });
    return breadcrumb.length > 0 ? (
        <Breadcrumb separator="/">
            {breadcrumb.map((item, index) => {
                if (typeof item === "object") {
                    return (
                        <Breadcrumb.Item key={index}>
                            {item.icon && (
                                <Icon
                                    type={item.icon}
                                    style={{ marginRight: 8 }}
                                />
                            )}
                            {item.path ? (
                                <Link to={item.path}>{item.name}</Link>
                            ) : (
                                item.name
                            )}
                        </Breadcrumb.Item>
                    );
                }
                return <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>;
            })}
        </Breadcrumb>
    ) : (
        <div style={{ height: 16 }} />
    );
};

/**
 * 渲染来自路由配置的面包屑
 */
function useBreadcrumbFormRoutes({ routes }: { routes: IRoute[] }) {
    const location = useLocation();
    const setBreadcrumb = useLayoutConfig(
        (state: any) => state.setBreadcrumb
    );
    useEffect(() => {
        const currentRouteMatch = matchRoutes(routes, location);
        const currentRouteConfig = currentRouteMatch?.at(-1)?.route;
        if (currentRouteConfig?.parentKey) {
            const parentRouteMatch = matchRoutes(
                routes,
                `/${currentRouteConfig?.parentKey}`
            );
            const breadcrumb = mapRouteMatchToBreadcrumb(
                parentRouteMatch!.concat(currentRouteMatch!.at(-1)!)
            );
            setBreadcrumb(breadcrumb);
        } else {
            const breadcrumb = mapRouteMatchToBreadcrumb(currentRouteMatch!);
            setBreadcrumb(breadcrumb);
        }
    }, [location]);
}

function mapRouteMatchToBreadcrumb(
    routeMatch: Array<RouteMatch>
): BreadcrumbType {
    return routeMatch?.map((item, index, arr) => {
        const routeConfig = item.route as IRoute;
        if (index === arr.length - 1) {
            return {
                name: routeConfig.name,
                icon: routeConfig.icon,
            } as BreadcrumbItem;
        }
        return {
            name: routeConfig.name,
            path: routeConfig.componentPath ? routeConfig.key : undefined,
            icon: routeConfig.icon,
        } as BreadcrumbItem;
    });
}

export default LayoutBreadcrumb;
