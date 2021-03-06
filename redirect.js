module.exports = [
  {
    redirect: "cloud",
    description: "show your Home Assistant Cloud configuration",
    introduced: "2021.3",
    component: "cloud",
  },
  {
    redirect: "integrations",
    description: "show your integrations",
    introduced: "2021.3",
  },
  {
    redirect: "config_flow_start",
    description: "start setting up a new integration",
    introduced: "2021.3",
    params: {
      domain: "string",
    },
    example: {
      domain: "hue",
    },
  },
  {
    redirect: "devices",
    description: "show your devices",
    introduced: "2021.3",
  },
  {
    redirect: "entities",
    description: "show your entities",
    introduced: "2021.3",
  },
  {
    redirect: "areas",
    description: "show your areas",
    introduced: "2021.3",
  },
  {
    redirect: "blueprints",
    description: "show your blueprints",
    introduced: "2021.3",
  },
  {
    redirect: "blueprint_import",
    description: "allow importing a blueprint",
    introduced: "2021.3",
    params: {
      blueprint_url: "url",
    },
    example: {
      blueprint_url:
        "https://github.com/home-assistant/core/blob/dev/homeassistant/components/automation/blueprints/motion_light.yaml",
    },
  },
  {
    redirect: "automations",
    description: "show your automations",
    introduced: "2021.3",
  },
  {
    redirect: "scenes",
    description: "show your scenes",
    introduced: "2021.3",
  },
  {
    redirect: "scripts",
    description: "show your scripts",
    introduced: "2021.3",
  },
  {
    redirect: "helpers",
    description: "show your helper entities",
    introduced: "2021.3",
  },
  {
    redirect: "tags",
    description: "show your tags",
    introduced: "2021.3",
  },
  {
    redirect: "lovelace_dashboards",
    description: "show your Lovelace dashboards",
    introduced: "2021.3",
  },
  {
    redirect: "lovelace_resources",
    description: "show your Lovelace resources",
    introduced: "2021.3",
  },
  {
    redirect: "people",
    description: "show your people",
    introduced: "2021.3",
  },
  {
    redirect: "zones",
    description: "show your zones",
    introduced: "2021.3",
  },
  {
    redirect: "users",
    description: "show your users",
    introduced: "2021.3",
  },
  {
    redirect: "general",
    description: "show your general Home Assistant settings",
    introduced: "2021.3",
  },
  {
    redirect: "server_controls",
    description: "show your server controls",
    introduced: "2021.3",
  },
  {
    redirect: "info",
    description: "show your Home Assistant version information",
    introduced: "2021.3",
  },
  {
    redirect: "logs",
    description: "show your Home Assistant logs",
    introduced: "2021.3",
  },
  {
    redirect: "profile",
    description: "show your Home Assistant user's profile",
    introduced: "2021.3",
  },
  {
    redirect: "developer_states",
    description: "show to raw state of your entities",
    introduced: "2021.3",
  },
  {
    redirect: "developer_services",
    description: "show the call services in developer tools",
    introduced: "2021.3",
  },
  {
    redirect: "developer_template",
    description: "show template editor in developer tools",
    introduced: "2021.3",
  },
  {
    redirect: "developer_events",
    description: "show debug tools for events",
    introduced: "2021.3",
  },
  {
    redirect: "supervisor",
    description: "show your Supervisor dashboard",
    introduced: "supervisor-2021.02.10",
  },
  {
    redirect: "supervisor_info",
    description: "show your Supervisor system information",
    introduced: "supervisor-2021.02.12",
  },
  {
    redirect: "supervisor_logs",
    description: "show your Supervisor system logs",
    introduced: "supervisor-2021.02.12",
  },
  {
    redirect: "supervisor_snapshots",
    description: "show your Supervisor snapshots",
    introduced: "supervisor-2021.02.10",
  },
  {
    redirect: "supervisor_addon",
    description: "show the dashboard of an Supervisor addon",
    introduced: "supervisor-2021.02.10",
    params: {
      addon: "string",
    },
    example: {
      addon: "core_samba",
    },
  },
];

module.exports.sort((a, b) => {
  const aDescription = a.description.toLowerCase();
  const bDescription = b.description.toLowerCase();

  if (aDescription < bDescription) {
    return -1;
  }
  if (aDescription > bDescription) {
    return 1;
  }

  return 0;
});
