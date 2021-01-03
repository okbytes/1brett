import { Url } from 'local'
import Link from 'components/Link'
import Icon from 'components/Icon'
import Prose from 'components/Prose'

export type ProjectProps = Url & { icon: React.ReactNode; icontitle: string }

export default function Project({ href, title, desc, icon, icontitle }: ProjectProps) {
  return (
    <Link href={href}>
      <div className="group mt-8">
        <div className="flex items-center">
          <Icon
            h="h-12"
            w="w-12"
            className="p-2.5 grid place-items-center rounded-lg text-white bg-brand-600 group-hover:text-gray-900 group-hover:bg-gray-200"
          >
            <span className="sr-only">{icontitle}</span>
            {icon}
          </Icon>
          <h3 className="ml-4 text-2xl font-semibold sm:text-3xl group-hover:text-brand-600">
            {title}
          </h3>
        </div>
        <Prose className="mt-3 group-hover:text-brand-600">
          <p>{desc}</p>
        </Prose>
      </div>
    </Link>
  )
}
