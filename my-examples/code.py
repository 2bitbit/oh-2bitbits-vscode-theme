import asyncio
import httpx
from typing import List, Dict, Any

async def fetch_hosted_zones(client: httpx.AsyncClient) -> List[Dict[str, Any]]:
    # 模拟获取 DNS 区域列表的 API 调用
    response = await client.get('https://api.example.com/v1/hosted-zones')
    response.raise_for_status()
    
    # 假设 API 返回的 JSON 结构中包含 'HostedZones' 键
    return response.json().get('HostedZones', [])

async def main() -> None:
    # 使用异步上下文管理器，测试主题对 'async with' 的高亮支持
    async with httpx.AsyncClient() as client:
        zones = await fetch_hosted_zones(client)

        for zone in zones:
            zone_id = zone.get('Id')
            if not zone_id:
                continue

            # 模拟获取特定区域的记录集
            records_url = f'https://api.example.com/v1/zones/{zone_id}/records'
            res = await client.get(records_url)
            record_sets = res.json().get('ResourceRecordSets', [])

            # 在每个记录集中搜索 "staging" 字符串
            for record_set in record_sets:
                record_name = record_set.get('Name', '')
                if 'staging' in record_name:
                    # 使用 f-string 测试字符串插值的高亮
                    print(f"Found staging record: {record_name}")

if __name__ == '__main__':
    # Python 3.7+ 标准的异步入口点
    asyncio.run(main())