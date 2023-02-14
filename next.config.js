const NextFederationPlugin = require('@module-federation/nextjs-mf')
const tcpPortUsed = require('tcp-port-used')

/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  renderLogo()

  const remoteEntryPath = '/_next/static/chunks/remoteEntry.js'

  const hosts = [
    {
      name: 'tone_core_ui',
      remote: 'http://18.237.49.174:42001',
      devPort: 42001,
    },
    {
      name: 'tone_admissions',
      remote: 'http://18.237.49.174:42002',
      devPort: 42002,
    },
    {
      name: 'tone_pages',
      remote: 'http://18.237.49.174:42003',
      devPort: 42003,
    },
  ]

  let remotes = {}

  console.log(`\nChecking for local buckets...\n`)

  for await (const host of hosts) {
    const isInUse = await tcpPortUsed.check(host.devPort, '127.0.0.1')

    if (isInUse) {
      console.log(`Bucket found: ${host.name}`)
      remotes[host.name] =
        host.name + `@http://localhost:${host.devPort}` + remoteEntryPath
    } else {
      remotes[host.name] = host.name + '@' + host.remote + remoteEntryPath
    }
  }

  const federationConfig = {
    name: 'tone_shell',
    filename: 'static/chunks/remoteEntry.js',
    remotes,
    shared: {},
  }

  return {
    webpack(config, options) {
      if (!options.isServer)
        config.plugins.push(new NextFederationPlugin(federationConfig))
      config.resolve.fallback = {
        fs: false,
      }
      return config
    },
  }
}

module.exports = nextConfig

function renderLogo() {
  console.log(`                                                                                                                                         
  ssssssssss      ooooooooooo   nnnn  nnnnnnnn        eeeeeeeeeeee    
  ss::::::::::s   oo:::::::::::oo n:::nn::::::::nn    ee::::::::::::ee  
  ss:::::::::::::s o:::::::::::::::on::::::::::::::nn  e::::::eeeee:::::ee
  s::::::ssss:::::so:::::ooooo:::::onn:::::::::::::::ne::::::e     e:::::e
  s:::::s  ssssss o::::o     o::::o  n:::::nnnn:::::ne:::::::eeeee::::::e
   s::::::s      o::::o     o::::o  n::::n    n::::ne:::::::::::::::::e 
      s::::::s   o::::o     o::::o  n::::n    n::::ne::::::eeeeeeeeeee  
  ssssss   s:::::s o::::o     o::::o  n::::n    n::::ne:::::::e           
  s:::::ssss::::::so:::::ooooo:::::o  n::::n    n::::ne::::::::e          
  s::::::::::::::s o:::::::::::::::o  n::::n    n::::n e::::::::eeeeeeee  
  s:::::::::::ss   oo:::::::::::oo   n::::n    n::::n  ee:::::::::::::e  
  sssssssssss       ooooooooooo     nnnnnn    nnnnnn    eeeeeeeeeeeeee  
  `)
}
